package com.teevision.ecommerce_backend.entities.imageAsset;

import com.teevision.ecommerce_backend.entities.imageAsset.dto.ImageAssetDeleteDto;
import com.teevision.ecommerce_backend.entities.imageAsset.dto.ImageAssetResponseDto;
import com.teevision.ecommerce_backend.entities.imageAsset.dto.ImageAssetSaveDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/image-assets")
@RequiredArgsConstructor
public class ImageAssetController {

    private final ImageAssetService imageAssetService;

    @GetMapping
    public ResponseEntity<List<ImageAssetResponseDto>> getAllImages() {
        return ResponseEntity.ok(imageAssetService.getAllImages());
    }

    @PostMapping
    public ResponseEntity<ImageAssetResponseDto> addImage(@RequestBody ImageAssetSaveDto imageAssetDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(imageAssetService.addImage(imageAssetDto));
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteImage(@RequestBody ImageAssetDeleteDto imageAssetDeleteDto) {
        imageAssetService.deleteImage(imageAssetDeleteDto);
        return ResponseEntity.noContent().build();
    }
}