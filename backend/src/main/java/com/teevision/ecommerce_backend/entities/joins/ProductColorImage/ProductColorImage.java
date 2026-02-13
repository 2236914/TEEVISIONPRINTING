package com.teevision.ecommerce_backend.entities.joins.ProductColorImage;

import com.teevision.ecommerce_backend.entities.joins.ProductColor.ProductColor;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "product_color_images")
@NoArgsConstructor
@Getter
@Setter
public class ProductColorImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumns({
            @JoinColumn(name = "product_id", referencedColumnName = "product_id", nullable = false),
            @JoinColumn(name = "color_id", referencedColumnName = "color_id", nullable = false)
    })
    private ProductColor productColor;

    @Column(name = "image_url", nullable = false)
    private String imageUrl;

    @Column(name = "sort_order", nullable = false)
    private String sortOrder;
}
