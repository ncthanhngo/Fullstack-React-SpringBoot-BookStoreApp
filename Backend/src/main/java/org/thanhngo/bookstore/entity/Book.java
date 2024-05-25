package org.thanhngo.bookstore.entity;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
@Entity
@Data
@Table(name = "book")
public class Book  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "book_id")
     private int BookId;
    @Column(name = "book_name", length = 512)
     private String bookName;
    @Column( length = 256)
    private String author;
    @Column(name = "isbn", length = 256)
    private String ISBN;// ma so xuat ban the gioi
    @Column( length = 512,columnDefinition = "TEXT")
    private String description;
    private double price;
    @Column(name = "discount_price")
    private double discountPrice;
    private int quantity;
    private double rating;//1* >> 5*
    @ManyToMany(fetch = FetchType.LAZY,cascade ={
            CascadeType.PERSIST,
            CascadeType.MERGE,
            CascadeType.DETACH,
            CascadeType.REFRESH
    })
    @JoinTable(name = "book_category",
                    joinColumns = @JoinColumn(name = "book_id"),
                    inverseJoinColumns = @JoinColumn(name = "category_id"))
    private
    List<Category> categories;
    @OneToMany(mappedBy = "book",fetch = FetchType.LAZY,cascade = CascadeType.ALL)// Xoa anh khi xoa book
    List<Image> images;
    @OneToMany(mappedBy = "book",fetch = FetchType.LAZY,cascade = CascadeType.ALL)// Sach se ton tai truoc (mappedBy)
    List<Review> reviews;
    @OneToMany(mappedBy = "book",fetch = FetchType.LAZY,cascade ={
            CascadeType.PERSIST,
            CascadeType.MERGE,
            CascadeType.DETACH,
            CascadeType.REFRESH
    })// Sach se ton tai truoc (mappedBy)
    List<OrderDetail> orderDetails;
    @OneToMany(mappedBy = "book",fetch = FetchType.LAZY,cascade = CascadeType.ALL)// Sach se ton tai truoc (mappedBy)
    List<WishList>  wishLists;
}
