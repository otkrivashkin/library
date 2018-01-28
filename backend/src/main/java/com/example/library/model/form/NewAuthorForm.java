package com.example.library.model.form;

import com.example.library.model.Author;
import com.example.library.model.view.NewEntityView;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

@Getter
@Setter
public class NewAuthorForm implements NewEntityView<Author> {

    private String firstName;
    private String lastName;

    @Override
    public Author create() {
        Author author = new Author();
        author.setFirstName(firstName);
        author.setLastName(lastName);
        author.setBooks(new ArrayList<>());
        return author;
    }
}
