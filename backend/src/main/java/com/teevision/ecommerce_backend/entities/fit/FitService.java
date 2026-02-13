package com.teevision.ecommerce_backend.entities.fit;

import com.teevision.ecommerce_backend.entities.fit.dto.FitReturnDto;
import com.teevision.ecommerce_backend.entities.fit.dto.FitSaveDto;
import com.teevision.ecommerce_backend.web.RecordAlreadyExistsException;
import com.teevision.ecommerce_backend.web.RecordNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FitService {
    
    private final JpaFitRepository jpaFitRepository;

    @Cacheable("fits")
    public List<Fit> getAllFits() {
        return jpaFitRepository.findAllByOrderByNameAsc();
    }

    @CacheEvict(value = {"fits", "fitsBySlug"}, allEntries = true)
    public Fit saveFit(FitSaveDto fitSaveDto) {
        if (jpaFitRepository.existsByName(fitSaveDto.getName())) {
            throw new RecordAlreadyExistsException("Fit already exists");
        }
        
        Fit fit = new Fit();
        fit.setName(fitSaveDto.getName());
        fit.setIsActive(fitSaveDto.getIsActive());
        fit.setSlug(fitSaveDto.getSlug());
        fit.setIsVisibleOnWebsite(fitSaveDto.getIsVisibleOnWebsite());
        fit.setSortOrder(fitSaveDto.getSortOrder());
        
        return jpaFitRepository.save(fit);
    }

    @CacheEvict(value = {"fits", "fitsBySlug"}, allEntries = true)
    public Fit updateFit(long id, FitSaveDto fitSaveDto) {
        Fit fit = jpaFitRepository.findById(id).orElseThrow(
                () -> new RecordNotFoundException("Fit not found")
        );
        
        if (!fitSaveDto.getName().equals(fit.getName()) && jpaFitRepository.existsByName(fitSaveDto.getName())) {
            throw new RecordAlreadyExistsException("Fit already exists");
        }
        
        fit.setName(fitSaveDto.getName());
        fit.setIsActive(fitSaveDto.getIsActive());
        fit.setSlug(fitSaveDto.getSlug());
        fit.setIsVisibleOnWebsite(fitSaveDto.getIsVisibleOnWebsite());
        fit.setSortOrder(fitSaveDto.getSortOrder());
        
        return jpaFitRepository.save(fit);
    }

    @Cacheable(value = "fitsBySlug", key = "#slug")
    public FitReturnDto getFitBySlug(String slug) {
        Fit fit = jpaFitRepository.findBySlug(slug)
                .orElseThrow(() -> new RecordNotFoundException("Fit not found"));
        return fit.convertToReturnDto();
    }
}