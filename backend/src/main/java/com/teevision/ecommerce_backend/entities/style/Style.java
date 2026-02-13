package com.teevision.ecommerce_backend.entities.style;

import com.teevision.ecommerce_backend.entities.product.Product;
import com.teevision.ecommerce_backend.entities.style.dto.StyleResponseDto;
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
@Table(name = "styles")
public class Style {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "is_active")
    private Boolean isActive;

    @OneToMany(mappedBy = "style", fetch = FetchType.LAZY)
    private Collection<Product> products;

    public StyleResponseDto convertToReturnDto() {
        return new StyleResponseDto(id, name, isActive);
    }
    public static Collection<StyleResponseDto> convertToResponseDto(Collection<Style> styles) {
        return styles.stream().map(Style::convertToReturnDto).toList();
    }
}
