package org.thanhngo.bookstore.dao;

import jdk.jfr.Registered;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;
import org.thanhngo.bookstore.entity.WishList;
@Repository
@RestResource(path = "wish-list", rel = "wish-list")
public interface WishListRepository extends JpaRepository<WishList, Integer> {
}
