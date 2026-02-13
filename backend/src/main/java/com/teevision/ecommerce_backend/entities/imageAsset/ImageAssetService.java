package com.teevision.ecommerce_backend.entities.imageAsset;

import com.teevision.ecommerce_backend.entities.imageAsset.dto.ImageAssetDeleteDto;
import com.teevision.ecommerce_backend.entities.imageAsset.dto.ImageAssetResponseDto;
import com.teevision.ecommerce_backend.entities.imageAsset.dto.ImageAssetSaveDto;
import com.teevision.ecommerce_backend.web.RecordNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ImageAssetService {

    private final JpaImageAssetRepository jpaImageAssetRepository;

    public List<ImageAssetResponseDto> getAllImages() {
        return jpaImageAssetRepository.findAll().stream()
                .map(ImageAsset::convertToDto)
                .collect(Collectors.toList());
    }

    public ImageAssetResponseDto addImage(ImageAssetSaveDto imageAssetDto) {
        ImageAsset imageAsset = new ImageAsset();
        imageAsset.setImageUrl(imageAssetDto.imageUrl());
        ImageAsset savedImageAsset = jpaImageAssetRepository.save(imageAsset);
        return savedImageAsset.convertToDto();
    }

    public void deleteImage(ImageAssetDeleteDto imageAssetDeleteDto) {
        List<Long> ids = imageAssetDeleteDto.ids();

        for (Long id : ids) {
            if (!jpaImageAssetRepository.existsById(id)) {
                throw new RecordNotFoundException("Image not found");
            }
            jpaImageAssetRepository.deleteById(id);
        }
//        if (!jpaImageAssetRepository.existsById(id)) {
//            throw new RecordNotFoundException("Image not found");
//        }
//        jpaImageAssetRepository.deleteById(id);
    }
}
