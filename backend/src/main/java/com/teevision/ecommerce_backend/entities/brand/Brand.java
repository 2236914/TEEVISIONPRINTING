package com.teevision.ecommerce_backend.entities.brand;

import com.teevision.ecommerce_backend.entities.brand.dto.BrandReturnDto;
import com.teevision.ecommerce_backend.entities.product.Product;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Collection;

@Entity
@ToString
@NoArgsConstructor
@Getter
@Setter
@Table(name = "brands")
public class Brand {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "is_active")
    private Boolean isActive;

    @Column(name = "is_visible_on_website")
    private Boolean isVisibleOnWebsite;

    @Column(name = "sort_order")
    private String sortOrder;

    @OneToMany(mappedBy = "brand", fetch = FetchType.LAZY)
    private Collection<Product> products;

    @Column(name = "slug", unique = true)
    String slug;

    public BrandReturnDto convertToReturnDto() {
        return new BrandReturnDto(id, name, isActive, slug, isVisibleOnWebsite, sortOrder);
    }

    public static Collection<BrandReturnDto> convertToReturnDto(Collection<Brand> brands) {
        return brands.stream()
            .sorted((i1, i2) -> {
                if ("N/A".equals(i1.getSortOrder()) && !"N/A".equals(i2.getSortOrder())) {
                    return 1; // Move i1 to the end
                }
                if (!"N/A".equals(i1.getSortOrder()) && "N/A".equals(i2.getSortOrder())) {
                    return -1; // Move i2 to the end
                }
              if ("N/A".equals(i1.getSortOrder())) {
                return 0;
              }
                return Integer.compare(
                    Integer.parseInt(i1.getSortOrder()),
                    Integer.parseInt(i2.getSortOrder())
                );
            })
            .map(Brand::convertToReturnDto)
            .toList();
    }
}
