package com.teevision.ecommerce_backend.web;

public class RateLimitReachedException extends RuntimeException {

    public RateLimitReachedException(String message) {
        super(message);
    }
}
