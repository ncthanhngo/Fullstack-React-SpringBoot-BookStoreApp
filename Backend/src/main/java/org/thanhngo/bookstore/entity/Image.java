package org.thanhngo.bookstore.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
@Data
@Entity
@Table(name = "image")
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "image_id")
    private int imageId;
    @Column(name = "image_name", length = 256)
    private String imageName;
    private boolean icon;
    private String url;
    @Column(name = "image_data", columnDefinition = "LONGTEXT")
    @Lob
    private String imageData;//use blob for big image
    @ManyToOne(cascade ={
            CascadeType.PERSIST,
            CascadeType.MERGE,
            CascadeType.DETACH,
            CascadeType.REFRESH
    })
    @JoinColumn(name = "book_id", nullable = false)//nullable = false nghia la image phai thuoc 1 book (delete)
    private Book book;//image can belong to one book

    //List<Review> reviews;
}
