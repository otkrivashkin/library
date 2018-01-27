package com.example.library.model.view;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@Getter
@Setter
@MappedSuperclass
public abstract class AbstractIdentifiable {

    public static final String ID_FIELD = "id";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;
}
