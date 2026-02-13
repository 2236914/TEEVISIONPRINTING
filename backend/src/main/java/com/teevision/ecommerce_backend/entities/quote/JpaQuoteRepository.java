package com.teevision.ecommerce_backend.entities.quote;

import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaQuoteRepository extends JpaRepository<Quote, Long> {
}