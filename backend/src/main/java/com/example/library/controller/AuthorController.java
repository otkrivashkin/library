package com.example.library.controller;

import com.example.library.model.form.EditAuthorForm;
import com.example.library.model.form.NewAuthorForm;
import com.example.library.model.view.AuthorView;
import com.example.library.service.AuthorService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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
public class AuthorController {

    private AuthorService authorService;

    @GetMapping("/authors")
    public ResponseEntity<List<AuthorView>> getAuthors() {
        List<AuthorView> authorViews = authorService.getAuthors();
        return new ResponseEntity<>(authorViews, HttpStatus.OK);
    }

    @GetMapping("/authors/{id}")
    public ResponseEntity<AuthorView> findAuthorById(@PathVariable("id") Long id) {
        AuthorView authorView = authorService.findAuthorById(id);
        return new ResponseEntity<>(authorView, HttpStatus.OK);
    }

    @DeleteMapping("/authors/{id}")
    public ResponseEntity deleteAuthorById(@PathVariable("id") Long id) {
        authorService.delete(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping(value = "/authors", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<AuthorView> createAuthor(@RequestBody NewAuthorForm newAuthorForm) {
        AuthorView author = authorService.createAuthor(newAuthorForm);
        return new ResponseEntity<>(author, HttpStatus.OK);
    }

    @PutMapping("/authors")
    public ResponseEntity editAuthor(@RequestBody EditAuthorForm editAuthorForm) {
        authorService.editAuthor(editAuthorForm);
        return new ResponseEntity(HttpStatus.OK);
    }

}
