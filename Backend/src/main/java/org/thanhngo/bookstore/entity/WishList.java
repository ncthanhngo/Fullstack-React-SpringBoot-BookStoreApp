package org.thanhngo.bookstore.entity;
import jakarta.persistence.*;
import lombok.Data;
@Entity
@Data
@Table(name = "wishlist")
public class WishList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "wish_list_id")
    private int wishListId;
    @ManyToOne(cascade ={
            CascadeType.PERSIST,
            CascadeType.MERGE,
            CascadeType.DETACH,
            CascadeType.REFRESH
    })
    @JoinColumn(name = "user_id", nullable = false)//nullable = false nghia la image phai thuoc 1 book (delete)
    private User user;
    @ManyToOne(cascade ={
            CascadeType.PERSIST,
            CascadeType.MERGE,
            CascadeType.DETACH,
            CascadeType.REFRESH
    })
    @JoinColumn(name = "book_id", nullable = false)
    private Book book;

}
