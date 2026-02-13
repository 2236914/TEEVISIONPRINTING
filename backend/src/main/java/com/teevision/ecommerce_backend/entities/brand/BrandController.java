package com.teevision.ecommerce_backend.entities.brand;

import com.teevision.ecommerce_backend.entities.brand.dto.BrandReturnDto;
import com.teevision.ecommerce_backend.entities.brand.dto.BrandSaveDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api/v1/brands")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class BrandController {

    private final BrandService brandService;

     @GetMapping
     @ResponseStatus(HttpStatus.OK)
     public Collection<BrandReturnDto> getAllBrands() {
         return Brand.convertToReturnDto(brandService.getAllBrands());
     }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public BrandReturnDto saveBrand(@RequestBody BrandSaveDto brandSaveDto) {
        Brand savedBrand = brandService.saveBrand(brandSaveDto);
        return savedBrand.convertToReturnDto();
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public BrandReturnDto updateBrand(@PathVariable long id, @RequestBody BrandSaveDto brandSaveDto) {
        return brandService.updateBrand(id, brandSaveDto).convertToReturnDto();
    }

    @GetMapping("/slug/{slug}")
    @ResponseStatus(HttpStatus.OK)
    public BrandReturnDto getBrandBySlug(@PathVariable String slug) {
        return brandService.getBrandBySlug(slug);
    }
}
