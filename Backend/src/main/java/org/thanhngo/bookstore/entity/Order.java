package org.thanhngo.bookstore.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private int orderId;
    @Column(name = "created_date")
    private Date createdDate;
    @Column(name = "purchase_address", length = 512)
    private String purchaseAddress;
    @Column(name = "delivery_address", length = 512)
    private String deliveryAddress;
    @Column(name = "total_product_price")
    private double totalProductPrice;
    @Column(name = "shipping_fee")
    private double shippingFee;
    @Column(name = "payment_fee")
    private double paymentFee;
    @Column(name = "total_price")
    private double totalPrice;
    @OneToMany(mappedBy = "order",fetch = FetchType.LAZY,cascade =CascadeType.ALL)
    private List<OrderDetail> orderDetails;
    @ManyToOne(cascade ={
            CascadeType.PERSIST,
            CascadeType.MERGE,
            CascadeType.DETACH,
            CascadeType.REFRESH
    })
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    @ManyToOne(cascade ={
            CascadeType.PERSIST,
            CascadeType.MERGE,
            CascadeType.DETACH,
            CascadeType.REFRESH
    })
    @JoinColumn(name = "payment_id", nullable = false)
    private PaymentMethod paymentMethod;
    @ManyToOne(cascade ={
            CascadeType.PERSIST,
            CascadeType.MERGE,
            CascadeType.DETACH,
            CascadeType.REFRESH
    })
    @JoinColumn(name = "delivery_id", nullable = false)
    private DeliveryMethod deliveryMethod;
}
