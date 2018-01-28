package com.example.library.model.view;

import com.example.library.model.Author;
import com.example.library.model.Book;
import lombok.Getter;
import lombok.ToString;
import lombok.Value;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@ToString
@Getter
@Value
public class BookView {

    private Long id;
    private String title;
    private ExistAuthorView author;
    private String genre;
    private Date publicationDate;

    private BookView(final Book book) {
        this.id = book.getId();
        this.title = book.getTitle();
        this.author = ExistAuthorView.fromAuthor(book.getAuthor());
        this.genre = book.getGenre();
        this.publicationDate = book.getPublicationDate();
    }

    public static BookView fromBook(final Book book) {
        return new BookView(book);
    }
}
