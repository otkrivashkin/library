package com.example.library.model.view;

import com.example.library.model.Book;
import lombok.Getter;
import lombok.ToString;
import lombok.Value;

import java.util.Date;

@ToString
@Getter
@Value
public class ExistBookView {

    private Long id;
    private String title;
    private String genre;
    private Date publicationDate;

    private ExistBookView(final Book book) {
        this.id = book.getId();
        this.title = book.getTitle();
        this.genre = book.getGenre();
        this.publicationDate = book.getPublicationDate();
    }

    public static ExistBookView fromBook(final Book book) {
        return new ExistBookView(book);
    }
}
