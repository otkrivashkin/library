package com.example.library.model.view;


public interface ExistingEntityView<T extends AbstractIdentifiable> {

    void update(T entity);
}
