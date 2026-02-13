package com.teevision.ecommerce_backend.utils;

import com.teevision.ecommerce_backend.config.RateLimitConfig;
import com.teevision.ecommerce_backend.web.RateLimitReachedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RateLimitUtils {

    @Autowired
    private RateLimitConfig rateLimitConfig;

    public void triggerRateLimit(String apiKey) {
        if (apiKey == null) {
            throw new IllegalArgumentException("Missing Client identity key");
        }

        if (!rateLimitConfig.resolveBucket(apiKey).tryConsume(1)) {
            throw new RateLimitReachedException("Too many requests");
        }
    }
}
