package com.teevision.ecommerce_backend.entities.fit;

import com.teevision.ecommerce_backend.entities.fit.dto.FitReturnDto;
import com.teevision.ecommerce_backend.entities.fit.dto.FitSaveDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api/v1/fits")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class FitController {
    
    private final FitService fitService;
    
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public Collection<FitReturnDto> getAllFits() {
        return Fit.convertToReturnDto(fitService.getAllFits());
    }
    
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public FitReturnDto saveFit(@RequestBody FitSaveDto fitSaveDto) {
        Fit savedFit = fitService.saveFit(fitSaveDto);
        return savedFit.convertToReturnDto();
    }
    
    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public FitReturnDto updateFit(@PathVariable long id, @RequestBody FitSaveDto fitSaveDto) {
        return fitService.updateFit(id, fitSaveDto).convertToReturnDto();
    }
    
    @GetMapping("/slug/{slug}")
    @ResponseStatus(HttpStatus.OK)
    public FitReturnDto getFitBySlug(@PathVariable String slug) {
        return fitService.getFitBySlug(slug);
    }
}