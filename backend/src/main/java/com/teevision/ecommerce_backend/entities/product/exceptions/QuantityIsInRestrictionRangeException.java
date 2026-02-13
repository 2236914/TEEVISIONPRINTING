package com.teevision.ecommerce_backend.entities.product.exceptions;

public class QuantityIsInRestrictionRangeException extends RuntimeException {
    public QuantityIsInRestrictionRangeException(String message) {
        super(message);
    }
}
