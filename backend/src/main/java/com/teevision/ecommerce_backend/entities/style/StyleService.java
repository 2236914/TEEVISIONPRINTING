package com.teevision.ecommerce_backend.entities.style;

import com.teevision.ecommerce_backend.entities.style.dto.StyleSaveDto;
import com.teevision.ecommerce_backend.web.RecordAlreadyExistsException;
import com.teevision.ecommerce_backend.web.RecordNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
@RequiredArgsConstructor
public class StyleService {

    private final JpaStyleRepository jpaStyleRepository;

    public Collection<Style> getAllStyles() {
        return jpaStyleRepository.findAll();
    }

    public Style saveStyle(StyleSaveDto styleSaveDto) {
        if (jpaStyleRepository.existsByName(styleSaveDto.getName())) {
            throw new RecordAlreadyExistsException("Style already exists");
        }

        Style style = new Style();
        style.setName(styleSaveDto.getName());
        style.setIsActive(styleSaveDto.getIsActive());
        return jpaStyleRepository.save(style);
    }

    public Style updateStyle(long id, StyleSaveDto styleSaveDto) {
        Style style = jpaStyleRepository.findById(id).orElseThrow(
                () -> new RecordNotFoundException("Style not found")
        );

        if (!styleSaveDto.getName().equals(style.getName()) && jpaStyleRepository.existsByName(styleSaveDto.getName())) {
            throw new RecordAlreadyExistsException("Style already exists");
        }

        style.setName(styleSaveDto.getName());
        style.setIsActive(styleSaveDto.getIsActive());
        return jpaStyleRepository.save(style);
    }
}