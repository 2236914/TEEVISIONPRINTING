package com.teevision.ecommerce_backend.entities.mainCategory;

import com.teevision.ecommerce_backend.entities.category.Category;
import com.teevision.ecommerce_backend.entities.mainCategory.dto.MainCategoryReturnDto;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.Collection;

@Entity
@ToString
@NoArgsConstructor
@Getter
@Setter
@Table(name = "main_categories")
public class MainCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name", unique = true)
    private String name;

    @Column(name = "slug", unique = true)
    private String slug;

    @Column(name = "description")
    private String description;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "is_active")
    private Boolean isActive;

    @Column(name = "is_visible_on_website")
    private Boolean isVisibleOnWebsite;

    @Column(name = "sort_order")
    private String sortOrder;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @OneToMany(mappedBy = "mainCategory", fetch = FetchType.LAZY)
    private Collection<Category> categories;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    public MainCategoryReturnDto convertToReturnDto() {
        return new MainCategoryReturnDto(
            id, 
            name, 
            slug, 
            description, 
            imageUrl, 
            isActive, 
            isVisibleOnWebsite, 
            sortOrder
        );
    }

public static Collection<MainCategoryReturnDto> convertToReturnDto(Collection<MainCategory> mainCategories) {
    return mainCategories.stream()
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
        .map(MainCategory::convertToReturnDto)
        .toList();
}
}