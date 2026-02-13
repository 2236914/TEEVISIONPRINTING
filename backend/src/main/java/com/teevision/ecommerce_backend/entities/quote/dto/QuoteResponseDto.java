package com.teevision.ecommerce_backend.entities.quote.dto;

import java.time.LocalDate;

public record QuoteResponseDto(
        long id,
        String fullName,
        String email,
        String phoneNumber,
        LocalDate dueDate,
        boolean hasSpecialRequest,
        String productName,
        String productColor,
        int frontNumberOfColors,
        int backNumberOfColors,
        boolean createArtwork,
        boolean needsDesigner,
        int extraSmallQuantity,
        int smallQuantity,
        int mediumQuantity,
        int largeQuantity,
        int extraLargeQuantity,
        int twoExtraLargeQuantity,
        int threeExtraLargeQuantity,
        int fourExtraLargeQuantity,
        int fiveExtraLargeQuantity,
        String pricePerShirt,
        String totalPrice,
        String artworkImageUrl,
        String additionalNotes
) {
}
