package com.example.library.service;

import com.example.library.model.Book;
import com.example.library.model.view.BookView;
import com.example.library.repository.BookRepository;
import com.example.library.service.base.DefaultCrudSupport;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import javax.validation.Validator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DefaultBookService extends DefaultCrudSupport<Book> implements BookService {

    private BookRepository bookRepository;

    public DefaultBookService(CrudRepository<Book, Long> repository,
                              Validator validator,
                              BookRepository bookRepository) {
        super(repository, validator);
        this.bookRepository = bookRepository;
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
}
