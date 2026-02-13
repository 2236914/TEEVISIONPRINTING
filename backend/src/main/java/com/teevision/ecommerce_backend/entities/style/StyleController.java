package com.teevision.ecommerce_backend.entities.style;

import com.teevision.ecommerce_backend.entities.style.dto.StyleResponseDto;
import com.teevision.ecommerce_backend.entities.style.dto.StyleSaveDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api/v1/styles")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class StyleController {

    private final StyleService styleService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public Collection<StyleResponseDto> getAllStyles() {
        return Style.convertToResponseDto(styleService.getAllStyles());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public StyleResponseDto saveStyle(@RequestBody StyleSaveDto styleSaveDto) {
        Style savedStyle = styleService.saveStyle(styleSaveDto);
        return savedStyle.convertToReturnDto();
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public StyleResponseDto updateStyle(@PathVariable long id, @RequestBody StyleSaveDto styleSaveDto) {
        return styleService.updateStyle(id, styleSaveDto).convertToReturnDto();
    }
}