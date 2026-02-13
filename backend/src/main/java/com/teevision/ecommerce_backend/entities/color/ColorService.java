package com.teevision.ecommerce_backend.entities.color;

import com.teevision.ecommerce_backend.entities.color.dto.ColorSaveDto;
import com.teevision.ecommerce_backend.entities.tag.TagService;
import com.teevision.ecommerce_backend.web.RecordAlreadyExistsException;
import com.teevision.ecommerce_backend.web.RecordNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ColorService {
    private final JpaColorRepository jpaColorRepository;
    private final TagService tagService;

    @Cacheable(value = "colors")
    public List<Color> findAll() {
        return jpaColorRepository.findAll();
    }

    @Cacheable(value = "paginatedColors", key = "#pageable.pageNumber + '-' + #pageable.pageSize + '-' + #search")
    public Page<Color> findAllPaginated(Pageable pageable, String search) {
        return jpaColorRepository.findAllColorWithSearch(pageable, search);
    }

    @CacheEvict(value = {"colors", "paginatedColors", "colorsAvailableToUseOnProduct"}, allEntries = true)
    public Color saveColor(ColorSaveDto colorSaveDto) {
        Color color = new Color();
        color.setName(colorSaveDto.getName());
        color.setHexCode(colorSaveDto.getHexCode());
        color.setIsActive(colorSaveDto.getIsActive());
        color.setIsImage(colorSaveDto.getIsImage());
        color.setImageUrl(colorSaveDto.getImageUrl());

        Color insertedColor = jpaColorRepository.save(color);

        tagService.saveAllColorTags(insertedColor.getId(), colorSaveDto.getTags(), false);

        return insertedColor;
    }

    @CacheEvict(value = {"colors", "paginatedColors", "colorsAvailableToUseOnProduct"}, allEntries = true)
    public Color updateColor(long id, ColorSaveDto colorSaveDto) {
        Color color = jpaColorRepository.findById(id).orElseThrow(
                () -> new RecordNotFoundException("Color not found")
        );

        color.setName(colorSaveDto.getName());
        color.setHexCode(colorSaveDto.getHexCode());
        color.setIsActive(colorSaveDto.getIsActive());
        color.setIsImage(colorSaveDto.getIsImage());
        color.setImageUrl(colorSaveDto.getImageUrl());

        Color updatedColor = jpaColorRepository.save(color);

        tagService.saveAllColorTags(updatedColor.getId(), colorSaveDto.getTags(), true);

        return updatedColor;
    }


    @Cacheable(value = "colorsAvailableToUseOnProduct", key = "#productId")
    public Collection<Color> getAllColorsAvailableToUseOnProduct(long productId) {
        return jpaColorRepository.getAllColorsAvailableToUseOnProduct(productId);
    }
}
