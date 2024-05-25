package org.thanhngo.bookstore.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;
import org.thanhngo.bookstore.entity.Image;
@Repository
@RestResource(path = "images")
public interface ImageRepository extends JpaRepository<Image, Integer> {
}
