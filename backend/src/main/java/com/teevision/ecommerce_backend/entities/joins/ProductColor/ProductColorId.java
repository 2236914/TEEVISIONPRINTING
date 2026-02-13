package com.teevision.ecommerce_backend.entities.joins.ProductColor;

import jakarta.persistence.Embeddable;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Embeddable
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class ProductColorId implements Serializable {

    private Long productId;
    private Long colorId;
}