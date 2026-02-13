package com.teevision.ecommerce_backend.entities.color;

import com.teevision.ecommerce_backend.entities.color.dto.ColorResponse;
import com.teevision.ecommerce_backend.entities.color.dto.ColorSaveDto;
import com.teevision.ecommerce_backend.entities.color.dto.PaginatedColorResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api/v1/colors")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ColorController {

    private final ColorService colorService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public Collection<ColorResponse> getAllColors() {
        return colorService.findAll().stream().map(Color::convertToResponseDto).toList();
    }

    @GetMapping("/paginated")
    @ResponseStatus(HttpStatus.OK)
    public PaginatedColorResponse getAllColorsPaginated(
        @RequestParam(name = "page", defaultValue = "0", required = false) int page,
        @RequestParam(name = "size", defaultValue = "10", required = false) int size,
        @RequestParam(name = "search", defaultValue = "", required = false) String search
    ){
        Pageable pageable = PageRequest.of(page, size);
        return Color.convertToPaginatedResponseDto(colorService.findAllPaginated(pageable, search));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ColorResponse saveColor(@RequestBody ColorSaveDto colorSaveDto) {
        Color savedColor = colorService.saveColor(colorSaveDto);
        return savedColor.convertToResponseDto();
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ColorResponse updateColor(@PathVariable long id, @RequestBody ColorSaveDto colorSaveDto) {
        return colorService.updateColor(id, colorSaveDto).convertToResponseDto();
    }

    @GetMapping("/product/{productId}")
    @ResponseStatus(HttpStatus.OK)
    public Collection<ColorResponse> getAllColorsAvailableToUseOnProduct(@PathVariable long productId) {
        return colorService.getAllColorsAvailableToUseOnProduct(productId).stream().map(Color::convertToResponseDto).toList();
    }
}
