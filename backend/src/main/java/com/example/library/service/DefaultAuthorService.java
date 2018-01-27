package com.example.library.service;

import com.example.library.model.Author;
import com.example.library.model.view.AuthorView;
import com.example.library.repository.AuthorRepository;
import com.example.library.service.base.DefaultCrudSupport;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import javax.validation.Validator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DefaultAuthorService extends DefaultCrudSupport<Author> implements AuthorService {

    private AuthorRepository authorRepository;

    public DefaultAuthorService(CrudRepository<Author, Long> repository,
                                Validator validator,
                                AuthorRepository authorRepository) {
        super(repository, validator);
        this.authorRepository = authorRepository;
    }

    @Override
    public List<AuthorView> getAuthors() {
        return authorRepository.findAll().stream()
                .map(AuthorView::fromAuthor)
                .collect(Collectors.toList());
    }

    @Override
    public AuthorView findAuthorById(Long id) {
        return AuthorView.fromAuthor(authorRepository.findOne(id));
    }
}
