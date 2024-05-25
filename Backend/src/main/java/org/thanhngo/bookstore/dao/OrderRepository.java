package org.thanhngo.bookstore.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;
import org.thanhngo.bookstore.entity.Order;
@Repository
@RestResource(path = "orders", rel = "orders")
public interface OrderRepository extends JpaRepository<Order, Integer> {
}
