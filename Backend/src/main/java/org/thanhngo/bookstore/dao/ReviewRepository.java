package org.thanhngo.bookstore.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;
import org.thanhngo.bookstore.entity.Review;

@Repository
@RestResource(path = "reviews", rel = "reviews")
interface ReviewRepository extends JpaRepository<Review, Long> {
}
