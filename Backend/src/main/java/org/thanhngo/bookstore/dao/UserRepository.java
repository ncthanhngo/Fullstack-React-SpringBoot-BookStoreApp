package org.thanhngo.bookstore.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;
import org.thanhngo.bookstore.entity.User;
@Repository
@RestResource(path = "users", rel = "users")
public interface UserRepository extends JpaRepository<User, Integer> {
}
