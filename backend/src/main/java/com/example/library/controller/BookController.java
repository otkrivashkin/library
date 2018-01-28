package com.example.library.controller;

import com.example.library.model.form.EditBookForm;
import com.example.library.model.form.NewBookForm;
import com.example.library.model.view.BookView;
import com.example.library.service.BookService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api")
public class BookController {

    private BookService bookService;

    @GetMapping("/books")
    public ResponseEntity<List<BookView>> getBooks() {
        List<BookView> bookViews = bookService.getBooks();
        return new ResponseEntity<>(bookViews, HttpStatus.OK);
    }

    @GetMapping("/books/{id}")
    public ResponseEntity<BookView> findBookById(@PathVariable("id") Long id) {
        BookView bookView = bookService.findBookById(id);
        return new ResponseEntity<>(bookView, HttpStatus.OK);
    }

    @PostMapping("/books")
    public ResponseEntity<BookView> createBook(@RequestBody NewBookForm newBookForm) {
        BookView bookView = bookService.createBook(newBookForm);
        return new ResponseEntity<>(bookView, HttpStatus.OK);
    }

    @DeleteMapping("/books/{id}")
    public ResponseEntity deleteBookById(@PathVariable("id") Long id) {
        bookService.delete(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PutMapping("/books")
    public ResponseEntity editBook(@RequestBody EditBookForm editBookForm) {
        bookService.editBook(editBookForm);
        return new ResponseEntity(HttpStatus.OK);
    }
}
