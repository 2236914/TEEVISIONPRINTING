package com.teevision.ecommerce_backend.config;

import io.github.bucket4j.Bandwidth;
import io.github.bucket4j.Bucket;
import io.github.bucket4j.Refill;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.Duration;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Configuration
public class RateLimitConfig {

    private final Map<String, Bucket> cache = new ConcurrentHashMap<>();

    @Bean
    public Map<String, Bucket> cache() {
        return cache;
    }

    public Bucket resolveBucket(String apiKey) {
        return cache.computeIfAbsent(apiKey, this::newBucket);
    }

    private Bucket newBucket(String apiKey) {
        Refill refill = Refill.greedy(10, Duration.ofDays(1));
        Bandwidth limit = Bandwidth.classic(10, refill);
        return Bucket.builder().addLimit(limit).build();
    }
}
