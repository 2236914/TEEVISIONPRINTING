package com.teevision.ecommerce_backend.entities.fit;

import com.teevision.ecommerce_backend.entities.fit.dto.FitReturnDto;
import com.teevision.ecommerce_backend.entities.product.Product;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Entity
@ToString
@NoArgsConstructor
@Getter
@Setter
@Table(name = "fits")
public class Fit {
    
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
    
    @Column(name = "slug", unique = true)
    private String slug;
    
    // CHANGED: From @OneToMany to @ManyToMany
    @ManyToMany(mappedBy = "fits", fetch = FetchType.LAZY)
    private Set<Product> products = new HashSet<>();
    
    public FitReturnDto convertToReturnDto() {
        return new FitReturnDto(id, name, isActive, slug, isVisibleOnWebsite, sortOrder);
    }
    
    public static Collection<FitReturnDto> convertToReturnDto(Collection<Fit> fits) {
        return fits.stream()
            .sorted((i1, i2) -> {
                if ("N/A".equals(i1.getSortOrder()) && !"N/A".equals(i2.getSortOrder())) {
                    return 1;
                }
                if (!"N/A".equals(i1.getSortOrder()) && "N/A".equals(i2.getSortOrder())) {
                    return -1;
                }
                if ("N/A".equals(i1.getSortOrder())) {
                    return 0;
                }
                return Integer.compare(
                    Integer.parseInt(i1.getSortOrder()),
                    Integer.parseInt(i2.getSortOrder())
                );
            })
            .map(Fit::convertToReturnDto)
            .toList();
    }
}