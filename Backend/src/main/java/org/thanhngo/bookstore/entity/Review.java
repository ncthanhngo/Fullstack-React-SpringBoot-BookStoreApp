package org.thanhngo.bookstore.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "review")
public class Review {
    @Id
    @Column(name = "review_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int reviewId;
    private float rating;
    private String comment;
    @ManyToOne(fetch = FetchType.LAZY,cascade ={
                CascadeType.PERSIST,
                CascadeType.MERGE,
                CascadeType.DETACH,
                CascadeType.REFRESH
    })
    @JoinColumn(name = "book_id", nullable = false)//review must belong to one book
    private Book book;
    @ManyToOne(cascade ={
            CascadeType.PERSIST,
            CascadeType.MERGE,
            CascadeType.DETACH,
            CascadeType.REFRESH
    })
    @JoinColumn(name = "user_id", nullable = false)//nullable = false nghia la image phai thuoc 1 book (delete)
    private User user;

}
