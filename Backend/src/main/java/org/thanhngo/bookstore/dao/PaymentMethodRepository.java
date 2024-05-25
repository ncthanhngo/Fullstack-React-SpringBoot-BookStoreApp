package org.thanhngo.bookstore.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;
import org.thanhngo.bookstore.entity.PaymentMethod;
@Repository
@RestResource(path = "payment-methods", rel = "payment-methods")
public interface PaymentMethodRepository extends JpaRepository<PaymentMethod, Integer> {
}
