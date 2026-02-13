package com.teevision.ecommerce_backend.entities.quote;

import com.teevision.ecommerce_backend.entities.quote.dto.QuoteResponseDto;
import com.teevision.ecommerce_backend.entities.quote.dto.QuoteSaveDto;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;

@Entity
@ToString
@NoArgsConstructor
@Getter
@Setter
@Table(name = "quotes")
public class Quote {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "full_name")
    String fullName;

    @Column(name = "email")
    String email;

    @Column(name = "phone_number")
    String phoneNumber;

    @Column(name = "due_date")
    LocalDate dueDate;

    @Column(name = "has_special_request")
    boolean hasSpecialRequest;

    @Column(name = "product_name")
    String productName;

    @Column(name = "product_color")
    String productColor;

    @Column(name = "front_number_of_colors")
    int frontNumberOfColors;

    @Column(name = "back_number_of_colors")
    int backNumberOfColors;

    @Column(name = "create_artwork")
    boolean createArtwork;

    @Column(name = "needs_designer")
    boolean needsDesigner;

    @Column(name = "extra_small_quantity")
    int extraSmallQuantity;

    @Column(name = "small_quantity")
    int smallQuantity;

    @Column(name = "medium_quantity")
    int mediumQuantity;

    @Column(name = "large_quantity")
    int largeQuantity;

    @Column(name = "extra_large_quantity")
    int extraLargeQuantity;

    @Column(name = "two_extra_large_quantity")
    int twoExtraLargeQuantity;

    @Column(name = "three_extra_large_quantity")
    int threeExtraLargeQuantity;

    @Column(name = "four_extra_large_quantity")
    int fourExtraLargeQuantity;

    @Column(name = "five_extra_large_quantity")
    int fiveExtraLargeQuantity;

    @Column(name = "price_per_shirt")
    String pricePerShirt;

    @Column(name = "total_price")
    String totalPrice;

    @Column(name = "artwork_image_url", length = 2000)
    String artworkImageUrl;

    @Column(name = "additional_notes")
    String additionalNotes;

    public QuoteResponseDto convertToResponseDto() {
        return new QuoteResponseDto(
                id, fullName, email, phoneNumber, dueDate, hasSpecialRequest, productName, productColor,
                frontNumberOfColors, backNumberOfColors,
                createArtwork, needsDesigner, extraSmallQuantity, smallQuantity, mediumQuantity, largeQuantity, extraLargeQuantity,
                twoExtraLargeQuantity, threeExtraLargeQuantity, fourExtraLargeQuantity, fiveExtraLargeQuantity,
                pricePerShirt, totalPrice, artworkImageUrl, additionalNotes
        );
    }

    public void convertToEntity(QuoteSaveDto quoteSaveDto) {
        this.fullName = quoteSaveDto.fullName();
        this.email = quoteSaveDto.email();
        this.phoneNumber = quoteSaveDto.phoneNumber();
        this.dueDate = quoteSaveDto.dueDate();
        this.hasSpecialRequest = quoteSaveDto.hasSpecialRequest();
        this.productName = quoteSaveDto.productName();
        this.productColor = quoteSaveDto.productColor();
        this.frontNumberOfColors = quoteSaveDto.frontNumberOfColors();
        this.backNumberOfColors = quoteSaveDto.backNumberOfColors();
        this.createArtwork = quoteSaveDto.createArtwork();
        this.needsDesigner = quoteSaveDto.needsDesigner();
        this.extraSmallQuantity = quoteSaveDto.extraSmallQuantity();
        this.smallQuantity = quoteSaveDto.smallQuantity();
        this.mediumQuantity = quoteSaveDto.mediumQuantity();
        this.largeQuantity = quoteSaveDto.largeQuantity();
        this.extraLargeQuantity = quoteSaveDto.extraLargeQuantity();
        this.twoExtraLargeQuantity = quoteSaveDto.twoExtraLargeQuantity();
        this.threeExtraLargeQuantity = quoteSaveDto.threeExtraLargeQuantity();
        this.fourExtraLargeQuantity = quoteSaveDto.fourExtraLargeQuantity();
        this.fiveExtraLargeQuantity = quoteSaveDto.fiveExtraLargeQuantity();
        this.pricePerShirt = quoteSaveDto.pricePerShirt();
        this.totalPrice = quoteSaveDto.totalPrice();
        this.artworkImageUrl = quoteSaveDto.artworkImageUrl();
        this.additionalNotes = quoteSaveDto.additionalNotes();
    }
}