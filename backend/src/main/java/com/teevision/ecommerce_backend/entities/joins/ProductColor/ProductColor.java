package com.teevision.ecommerce_backend.entities.joins.ProductColor;

import com.teevision.ecommerce_backend.entities.color.Color;
import com.teevision.ecommerce_backend.entities.joins.ProductColorImage.ProductColorImage;
import com.teevision.ecommerce_backend.entities.product.Product;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Entity
@Table(name = "product_colors")
public class ProductColor {

    @EmbeddedId
    private ProductColorId id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    @ToString.Exclude
    @MapsId("productId")
    private Product product;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "color_id")
    @ToString.Exclude
    @MapsId("colorId")
    private Color color;

    @Column(name = "sort_order", nullable = false, columnDefinition = "VARCHAR(255) DEFAULT 'N/A'")
    private String sortOrder;

    @OneToMany(mappedBy = "productColor", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ProductColorImage> productColorImages;

}
