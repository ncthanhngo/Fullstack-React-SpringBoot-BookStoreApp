package org.thanhngo.bookstore.entity;
import jakarta.persistence.*;
import lombok.Data;
import java.util.List;
@Data
@Entity
@Table(name = "delivery_method")
public class DeliveryMethod {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "delivery_id")
    private int deliveryId;
    @Column(name = "delivery_name")
    private String methodName;
    private String description;
    @Column(name = "delivery_fee")
    private double deliveryFee;
    @OneToMany(mappedBy = "deliveryMethod",fetch = FetchType.LAZY,cascade ={
            CascadeType.PERSIST,
            CascadeType.MERGE,
            CascadeType.DETACH,
            CascadeType.REFRESH
    })
    private List<Order> orders;
}
