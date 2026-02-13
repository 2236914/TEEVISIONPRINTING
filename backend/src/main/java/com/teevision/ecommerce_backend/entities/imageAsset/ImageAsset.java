package com.teevision.ecommerce_backend.entities.imageAsset;

import com.teevision.ecommerce_backend.entities.imageAsset.dto.ImageAssetResponseDto;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@ToString
@NoArgsConstructor
@Getter
@Setter
@Table(name = "image_assets")
public class ImageAsset {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "image_url")
    private String imageUrl;

    ImageAssetResponseDto convertToDto() {
        return new ImageAssetResponseDto(id, imageUrl);
    }

}
