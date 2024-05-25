package org.thanhngo.bookstore.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;
import org.thanhngo.bookstore.entity.Book;
@Repository
@RestResource(path = "books", rel = "books")
public interface BookRepository extends JpaRepository<Book, Integer> {
}
