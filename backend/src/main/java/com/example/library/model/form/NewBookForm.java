package com.example.library.model.form;

import com.example.library.model.Book;
import com.example.library.model.view.NewEntityView;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class NewBookForm implements NewEntityView<Book> {

    private String title;
    private Long author;
    private String genre;
    private Date publicationDate;

    @Override
    public Book create() {
        Book book = new Book();
        book.setTitle(title);
        book.setGenre(genre);
        book.setPublicationDate(publicationDate);
        return book;
    }
}
