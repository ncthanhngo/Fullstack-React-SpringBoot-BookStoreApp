package org.thanhngo.bookstore.config;

import jakarta.persistence.EntityManager;
import jakarta.persistence.metamodel.Type;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.thanhngo.bookstore.entity.Category;
import org.thanhngo.bookstore.entity.User;

@Configuration
public class RestConfig implements RepositoryRestConfigurer {
    //Enable IDs
    @Autowired
    private EntityManager entityManager;
    HttpMethod[] blockedMethods = {HttpMethod.GET, HttpMethod.POST, HttpMethod.PUT, HttpMethod.DELETE};
    HttpMethod[] blockUserDelete = {HttpMethod.DELETE};

    @Bean
    public RepositoryRestConfigurer repositoryRestConfigurer() {
        return RepositoryRestConfigurer.withConfig(
                config -> config.exposeIdsFor(entityManager.getMetamodel().getEntities().stream().map(Type::getJavaType).toArray(Class[]::new)));
                         //config.exposeIdsFor(Book.class,Order.class);

    }
    //block HttpMethods
    private String url = "http://localhost:8080";

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        RepositoryRestConfigurer.super.configureRepositoryRestConfiguration(config, cors);
//        BlockedMethods(Category.class,config,blockedMethods);// Block Category class
        BlockedMethods(User.class,config,blockUserDelete);// Block User class delete any user
    }
    private void BlockedMethods(Class c, RepositoryRestConfiguration config,HttpMethod[] blockedMethods) {
        config.getExposureConfiguration()
               .forDomainType(c)
               .withItemExposure((metadata, httpMethods) -> httpMethods.disable(blockedMethods))
               .withCollectionExposure((metadata, httpMethods) -> httpMethods.disable(blockedMethods));
    }
}
