package com.teevision.ecommerce_backend.entities.brand;

import com.teevision.ecommerce_backend.entities.blog.Blog;
import com.teevision.ecommerce_backend.entities.blog.dto.BlogResponseDto;
import com.teevision.ecommerce_backend.entities.brand.dto.BrandReturnDto;
import com.teevision.ecommerce_backend.entities.brand.dto.BrandSaveDto;
import com.teevision.ecommerce_backend.web.RecordAlreadyExistsException;
import com.teevision.ecommerce_backend.web.RecordNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BrandService {

    private final JpaBrandRepository jpaBrandRepository;

    public List<Brand> getAllBrands() {
        return jpaBrandRepository.findAllByOrderByNameAsc();
    }

    public Brand saveBrand(BrandSaveDto brandSaveDto) {
        if (jpaBrandRepository.existsByName(brandSaveDto.getName())) {
            throw new RecordAlreadyExistsException("Brand already exists");
        }

        Brand brand = new Brand();
        brand.setName(brandSaveDto.getName());
        brand.setIsActive(brandSaveDto.getIsActive());
        brand.setSlug(brandSaveDto.getSlug());
        brand.setIsVisibleOnWebsite(brandSaveDto.getIsVisibleOnWebsite());
        brand.setSortOrder(brandSaveDto.getSortOrder());

        return jpaBrandRepository.save(brand);
    }

    public Brand updateBrand(long id, BrandSaveDto brandSaveDto) {
        Brand brand = jpaBrandRepository.findById(id).orElseThrow(
                () -> new RecordNotFoundException("Brand not found")
        );

        if (!brandSaveDto.getName().equals(brand.getName()) && jpaBrandRepository.existsByName(brandSaveDto.getName())) {
            throw new RecordAlreadyExistsException("Brand already exists");
        }

        brand.setName(brandSaveDto.getName());
        brand.setIsActive(brandSaveDto.getIsActive());
        brand.setSlug(brandSaveDto.getSlug());
        brand.setIsVisibleOnWebsite(brandSaveDto.getIsVisibleOnWebsite());
        brand.setSortOrder(brandSaveDto.getSortOrder());

        return jpaBrandRepository.save(brand);
    }

    public BrandReturnDto getBrandBySlug(String slug) {
        Brand brand = jpaBrandRepository.findBySlug(slug)
                .orElseThrow(() -> new RecordNotFoundException("Brand not found"));

        return brand.convertToReturnDto();
    }
}
