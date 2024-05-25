package org.thanhngo.bookstore.entity;


import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
@Data
@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int userId;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "user_name",unique = true)
    private String userName;
    @Column(name = "password", length = 512)
    private String password;
    private char gender;
    private String email;
    private String phone;
    private String address;
    @Column(name = "delivery_address", length = 512)
    private String deliveryAddress;
    @OneToMany(mappedBy = "user",fetch = FetchType.LAZY,cascade ={
            CascadeType.PERSIST,
            CascadeType.MERGE,
            CascadeType.DETACH,
            CascadeType.REFRESH
    })
    private List<Review> reviews;
    @OneToMany(mappedBy = "user",fetch = FetchType.LAZY,cascade ={
            CascadeType.PERSIST,
            CascadeType.MERGE,
            CascadeType.DETACH,
            CascadeType.REFRESH
    })
    private List<WishList> wishLists;
    @ManyToMany(fetch = FetchType.LAZY,cascade ={
            CascadeType.PERSIST,
            CascadeType.MERGE,
            CascadeType.DETACH,
            CascadeType.REFRESH
    })
    @JoinTable(name = "user_role",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private List<Role>  userRoles;
    @OneToMany(mappedBy = "user",fetch = FetchType.LAZY,cascade ={
            CascadeType.PERSIST,
            CascadeType.MERGE,
            CascadeType.DETACH,
            CascadeType.REFRESH
    })
    private List<Order> orders;
}
