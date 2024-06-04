package org.thanhngo.bookstore.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;
import org.thanhngo.bookstore.entity.Book;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;

@Repository
@RestResource(path = "books", rel = "books")
public interface BookRepository extends JpaRepository<Book, Integer> {
    Page<Book> findByBookNameContaining(@RequestParam("bookName") String bookName, Pageable pageable);
}

