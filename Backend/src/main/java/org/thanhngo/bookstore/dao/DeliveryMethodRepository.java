package org.thanhngo.bookstore.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;
import org.thanhngo.bookstore.entity.DeliveryMethod;
@Repository
@RestResource(path = "delivery-methods")
public interface DeliveryMethodRepository extends JpaRepository<DeliveryMethod, Integer> {
}
