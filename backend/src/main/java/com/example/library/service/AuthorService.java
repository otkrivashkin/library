package com.example.library.service;

import com.example.library.model.Author;
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
}
