package org.thanhngo.bookstore.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;
import org.thanhngo.bookstore.entity.Category;
@Repository
@RestResource(path = "categories", rel = "categories")
public interface CategoryRepository extends JpaRepository<Category, Integer> {
}