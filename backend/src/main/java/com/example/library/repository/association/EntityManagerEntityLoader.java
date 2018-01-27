package com.example.library.repository.association;

import com.example.library.model.view.AbstractIdentifiable;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;

@AllArgsConstructor
@Component
public class EntityManagerEntityLoader implements LazyEntityLoader {

    private EntityManager entityManager;

    @Override
    public <T extends AbstractIdentifiable> T load(Long primaryKey, Class<T> entityClass) {
        return entityManager.getReference(entityClass, primaryKey);
    }
}
