package com.example.library.model.form;

import com.example.library.model.Book;
import com.example.library.model.view.ExistingEntityView;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class EditBookForm implements ExistingEntityView<Book> {

    private Long id;

    private String title;

    private String genre;

    private Date publicationDate;

    @Override
    public void update(Book book) {
        book.setId(id);
        book.setTitle(title);
        book.setGenre(genre);
        book.setPublicationDate(publicationDate);
    }
}
