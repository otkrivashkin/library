package com.example.library.service;

import com.example.library.model.Book;
import com.example.library.model.view.BookView;
import com.example.library.service.base.CrudSupport;

import java.util.List;

public interface BookService extends CrudSupport<Book> {

    /**
     * Get all books
     *
     * @return list of books
     */
    List<BookView> getBooks();
}
