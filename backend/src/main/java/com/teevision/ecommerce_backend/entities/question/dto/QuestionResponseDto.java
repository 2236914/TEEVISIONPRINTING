package com.teevision.ecommerce_backend.entities.question.dto;

public record QuestionResponseDto(
        long id,
        String fullName,
        String email,
        String phoneNumber,
        String companyName,
        String inquiryDetails,
        String preferredContactMethod
) {
}
