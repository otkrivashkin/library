package com.example.library.model;

import com.example.library.model.view.AbstractVersional;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

import static java.util.Objects.isNull;

@Getter
@Setter
@Entity
@Table(name = "authors")
@EqualsAndHashCode(callSuper = false, of = "id")
public class Author extends AbstractVersional {

    private String firstName;

    private String lastName;

    @OneToMany(mappedBy = "author", cascade = CascadeType.ALL)
    private List<Book> books;

    public void addBook(Book book) {
        if (isNull(books)) {
            books = new ArrayList<>();
        }
        books.add(book);
    }

    public void deleteBook(Long bookId) {
        books.removeIf(book -> book.getId().equals(bookId));
    }
}
