package com.example.library.model.view;

import com.example.library.model.Author;
import lombok.Getter;
import lombok.ToString;
import lombok.Value;

@ToString
@Getter
@Value
public class ExistAuthorView {

    private Long id;
    private String firstName;
    private String lastName;

    private ExistAuthorView(final Author author) {
        this.id = author.getId();
        this.firstName = author.getFirstName();
        this.lastName = author.getLastName();
    }

    public static ExistAuthorView fromAuthor(final Author author) {
        return new ExistAuthorView(author);
    }

}
