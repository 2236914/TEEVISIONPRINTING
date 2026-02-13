package com.teevision.ecommerce_backend.entities.category;

import com.teevision.ecommerce_backend.entities.category.dto.CategoryReturnDto;
import com.teevision.ecommerce_backend.entities.mainCategory.MainCategory;
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
@Table(name = "categories")
public class Category {

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

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "description")
    private String description;

    @ManyToMany(mappedBy = "categories")
    private Collection<Product> products;

    @Column(name = "slug", unique = true)
    String slug;

    // New relationship to MainCategory
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "main_category_id")
    private MainCategory mainCategory;

    public CategoryReturnDto convertToReturnDto() {
        return new CategoryReturnDto(
            id, 
            name, 
            isActive, 
            slug, 
            isVisibleOnWebsite, 
            sortOrder,
            mainCategory != null ? mainCategory.getId() : null,
            mainCategory != null ? mainCategory.getName() : null,
            imageUrl,
            description
        );
    }

public static Collection<CategoryReturnDto> convertToReturnDto(Collection<Category> categories) {
    return categories.stream()
        .sorted((i1, i2) -> {
            String order1 = i1.getSortOrder();
            String order2 = i2.getSortOrder();
            
            // Handle N/A cases first
            if ("N/A".equals(order1) && !"N/A".equals(order2)) {
                return 1;
            }
            if (!"N/A".equals(order1) && "N/A".equals(order2)) {
                return -1;
            }
            if ("N/A".equals(order1) && "N/A".equals(order2)) {
                return i1.getName().compareTo(i2.getName());
            }
            
            // Try to parse as integers
            try {
                int int1 = Integer.parseInt(order1);
                int int2 = Integer.parseInt(order2);
                return Integer.compare(int1, int2);
            } catch (NumberFormatException e) {
                // If either fails to parse, fall back to string comparison
                int comparison = order1.compareTo(order2);
                if (comparison != 0) {
                    return comparison;
                }
                return i1.getName().compareTo(i2.getName());
            }
        })
        .map(Category::convertToReturnDto)
        .toList();
}
}