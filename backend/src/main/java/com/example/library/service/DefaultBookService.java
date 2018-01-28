package com.example.library.service;

import com.example.library.model.Author;
import com.example.library.model.Book;
import com.example.library.model.form.EditBookForm;
import com.example.library.model.form.NewBookForm;
import com.example.library.model.view.BookView;
import com.example.library.repository.AuthorRepository;
import com.example.library.repository.BookRepository;
import com.example.library.service.base.DefaultCrudSupport;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.validation.Validator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DefaultBookService extends DefaultCrudSupport<Book> implements BookService {

    private BookRepository bookRepository;
    private AuthorRepository authorRepository;

    public DefaultBookService(CrudRepository<Book, Long> repository,
                              Validator validator,
                              BookRepository bookRepository,
                              AuthorRepository authorRepository) {
        super(repository, validator);
        this.bookRepository = bookRepository;
        this.authorRepository = authorRepository;
    }

    @Override
    public List<BookView> getBooks() {
        return bookRepository.findAll().stream()
                .map(BookView::fromBook)
                .collect(Collectors.toList());
    }

    @Override
    public BookView findBookById(Long id) {
        return BookView.fromBook(bookRepository.findOne(id));
    }

    @Transactional
    @Override
    public BookView createBook(NewBookForm newBookForm) {
        final Book book = newBookForm.create();
        Author author = authorRepository.findOne(newBookForm.getAuthor());
        book.setAuthor(author);
        save(book);
        return BookView.fromBook(book);
    }

    @Transactional
    @Override
    public void editBook(EditBookForm editBookForm) {
        Book book = bookRepository.findOne(editBookForm.getId());
        editBookForm.update(book);
        update(book);
    }
}
