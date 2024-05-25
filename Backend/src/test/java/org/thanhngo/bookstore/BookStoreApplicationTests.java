package org.thanhngo.bookstore;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.thanhngo.bookstore.entity.Category;

@SpringBootTest
class BookStoreApplicationTests {

    @Test
    void contextLoads() {
        Category category = Category.builder()
                .categoryId(1)
                .categoryName("Java")
                .build();
    }

}
