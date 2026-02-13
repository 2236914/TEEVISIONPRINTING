package com.teevision.ecommerce_backend.entities.question;

import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaQuestionRepository extends JpaRepository<Question, Long> {
}