package com.example.library.model.form;

import com.example.library.model.Author;
import com.example.library.model.view.BookView;
import com.example.library.model.view.ExistingEntityView;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class EditAuthorForm implements ExistingEntityView<Author> {

    private Long id;

    private String firstName;

    private String lastName;

    @Override
    public void update(Author author) {
        author.setId(id);
        author.setFirstName(firstName);
        author.setLastName(lastName);
    }
}
