package com.example.library.model.view;

import com.example.library.model.Author;
import lombok.Getter;
import lombok.ToString;
import lombok.Value;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@ToString
@Getter
@Value
public class AuthorView {

    private Long id;
    private String firstName;
    private String lastName;
    private List<ExistBookView> bookViews;

    private AuthorView(final Author author) {
        this.id = author.getId();
        this.firstName = author.getFirstName();
        this.lastName = author.getLastName();
        this.bookViews = author.getBooks().stream()
        .map(ExistBookView::fromBook)
        .collect(Collectors.toList());
    }

    public static AuthorView fromAuthor(final Author author) {
        return new AuthorView(author);
    }
}
