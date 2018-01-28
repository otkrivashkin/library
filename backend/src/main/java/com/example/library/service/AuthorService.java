package com.example.library.service;

import com.example.library.model.Author;
import com.example.library.model.form.EditAuthorForm;
import com.example.library.model.form.NewAuthorForm;
import com.example.library.model.view.AuthorView;
import com.example.library.service.base.CrudSupport;

import java.util.List;

public interface AuthorService extends CrudSupport<Author> {

    /**
     * Get all existing authors
     *
     * @return list of all existing authors
     */
    List<AuthorView> getAuthors();

    /**
     * Get author by id
     *
     * @param id of existing author
     * @return AuthorView
     */
    AuthorView findAuthorById(Long id);

    /**
     * Create new Author
     *
     * @param newAuthorForm from ui
     * @return AuthorView
     */
    AuthorView createAuthor(NewAuthorForm newAuthorForm);

    /**
     * Edit existing author
     *
     * @param editAuthorForm is coming from ui
     */
    void editAuthor(EditAuthorForm editAuthorForm);
}
