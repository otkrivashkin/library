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
import java.util.List;

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
}
