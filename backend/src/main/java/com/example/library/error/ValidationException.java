package com.example.library.error;

import com.example.library.model.view.AbstractIdentifiable;

import javax.validation.ConstraintViolation;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.mapping;
import static java.util.stream.Collectors.toList;

public class ValidationException extends RuntimeException {

    private String className;

    private Map<String, List<String>> errors;

    public <T extends AbstractIdentifiable> ValidationException(T entity, final Set<ConstraintViolation<T>> violations) {
        this.className = entity.getClass().getSimpleName();
        this.errors = violations.stream().collect(Collectors.groupingBy(violation -> violation.getPropertyPath().toString(),
                mapping(ConstraintViolation::getMessage, toList())));
    }

    @Override
    public String getMessage() {
        final String errors = this.errors.entrySet().stream().map(ValidationException::formatError)
                .collect(Collectors.joining("\n"));
        return String.format("Validation error while saving entity %s to database. Errors: %s", className, errors);
    }

    private static String formatError(final Map.Entry<String, List<String>> fieldError) {
        return String.format("{field: %s, errors: %s}", fieldError.getKey(), String.join(",", fieldError.getValue()));
    }
}
