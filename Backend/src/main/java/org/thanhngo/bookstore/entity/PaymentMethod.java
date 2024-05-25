package org.thanhngo.bookstore.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
@Data
@Entity
@Table(name = "payment_method")
public class PaymentMethod {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "payment_id")
    private int paymentMethodId;
    @Column(name = "payment_name", length = 512)
    private String methodName;
    private String description;
    @Column(name = "payment_fee")
    private double paymentFee;
    @OneToMany(mappedBy = "paymentMethod",fetch = FetchType.LAZY,cascade ={
            CascadeType.PERSIST,
            CascadeType.MERGE,
            CascadeType.DETACH,
            CascadeType.REFRESH
    })
    private List<Order> orders;
}
