package com.example.library.service.base;

import com.example.library.error.ValidationException;
import com.example.library.model.view.AbstractIdentifiable;
import com.google.common.collect.Lists;
import lombok.AllArgsConstructor;
import org.springframework.data.repository.CrudRepository;

import javax.validation.ConstraintViolation;
import javax.validation.Validator;
import javax.validation.groups.Default;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import static com.google.common.base.Preconditions.checkArgument;
import static java.util.Objects.isNull;
import static java.util.Objects.nonNull;

/**
 * Default implementation of {@link CrudSupport} which simply delegates
 * crud operations to {@link CrudRepository}
 */
@AllArgsConstructor
public abstract class DefaultCrudSupport<E extends AbstractIdentifiable> implements CrudSupport<E> {

    private CrudRepository<E, Long> repository;

    private Validator validator;

    @Override
    public Optional<E> findById(Long entityId) {
        return Optional.ofNullable(repository.findOne(entityId));
    }

    @Override
    public List<E> findAll() {
        return Lists.newArrayList(repository.findAll());
    }

    @Override
    public E update(E entity) {
        checkArgument(nonNull(entity.getId()),
                "Could not update entity. Entity hasn't persisted yet");
        return saveWithValidation(entity, GeneralGroup.Update.class);
    }

    @Override
    public E create(E entity) {
        checkArgument(isNull(entity.getId()),
                "Could not createPharmacy entity. Entity has already exists");
        return saveWithValidation(entity, GeneralGroup.Create.class);
    }

    @Override
    public E save(E entity) {
        return isNull(entity.getId()) ? create(entity) : update(entity);
    }

    @Override
    public void delete(E entity) {
        checkArgument(nonNull(entity.getId()),
                "Could not delete entity. Entity hasn't persisted yet");
        repository.delete(entity);
    }

    @Override
    public void delete(Long id) {
        repository.delete(id);
    }

    private E saveWithValidation(final E entity, final Class<?> group) {
        final Set<ConstraintViolation<E>> errors = validator.validate(entity, group, Default.class);
        if (errors.isEmpty()) {
            return repository.save(entity);
        }
        throw new ValidationException(entity, errors);
    }
}
