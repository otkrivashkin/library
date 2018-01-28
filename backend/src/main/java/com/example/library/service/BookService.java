package com.example.library.service;

import com.example.library.model.Book;
import com.example.library.model.form.NewBookForm;
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

    /**
     * Find book by id
     *
     * @param id of existing book
     * @return Book View
     */
    BookView findBookById(Long id);

    /**
     * Create new book
     *
     * @param newBookForm from ui
     * @return BookView
     */
    BookView createBook(NewBookForm newBookForm);
}
