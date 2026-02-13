package com.teevision.ecommerce_backend.entities.color;

import com.teevision.ecommerce_backend.entities.color.dto.ColorResponse;
import com.teevision.ecommerce_backend.entities.color.dto.PaginatedColorResponse;
import com.teevision.ecommerce_backend.entities.joins.ProductColor.ProductColor;
import com.teevision.ecommerce_backend.entities.joins.colorTag.ColorTag;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.domain.Page;

import java.util.Collection;
import java.util.List;

@Entity
@ToString
@NoArgsConstructor
@Getter
@Setter
@Table(name = "colors")
public class Color {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name="hex_code")
    private String hexCode;

    @Column(name = "is_active")
    private Boolean isActive;

    @Column(name = "is_image")
    private Boolean isImage;

    @Column(name = "image_url")
    private String imageUrl;

    @OneToMany(mappedBy = "color", fetch=FetchType.LAZY)
    private Collection<ProductColor> products;

    @OneToMany(mappedBy = "color", fetch=FetchType.LAZY)
    private Collection<ColorTag> tags;

    public ColorResponse convertToResponseDto() {

        if (tags == null) {
            return new ColorResponse(id, name, hexCode, isActive, List.of(), isImage, imageUrl);
        }

        List<String> colorTags = tags
            .stream()
            .map(colorTag ->
                colorTag.getTag().getTagName()).toList();


        return new ColorResponse(id, name, hexCode, isActive, colorTags, isImage, imageUrl);
    }

    public static Collection<ColorResponse> convertToResponseDto(Collection<Color> colors) {
        return colors.stream().map(Color::convertToResponseDto).toList();
    }

    public static PaginatedColorResponse convertToPaginatedResponseDto(Page<Color> colors) {
        int totalPages = colors.getTotalPages();
        long totalElements = colors.getTotalElements();
        int currentPage = colors.getNumber();
        int pageSize = colors.getSize();
        List<Color> content = colors.getContent();
        return new PaginatedColorResponse(Color.convertToResponseDto(content), totalPages, totalElements, currentPage, pageSize);
    }
}
