package com.teevision.ecommerce_backend.entities.quote;

import com.teevision.ecommerce_backend.entities.quote.dto.QuoteResponseDto;
import com.teevision.ecommerce_backend.entities.quote.dto.QuoteSaveDto;
import com.teevision.ecommerce_backend.utils.RateLimitUtils;
import com.teevision.ecommerce_backend.utils.SecurityUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/quotes")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class QuoteController {

    private final QuoteService quoteService;
    private final SecurityUtils securityUtils;
    private final RateLimitUtils rateLimitUtils;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<QuoteResponseDto> getAllQuotes() {
        return quoteService.getAllQuotes();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public QuoteResponseDto getQuoteById(@PathVariable long id) {
        return quoteService.getQuoteById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createQuote(@RequestHeader("X-application-key") String applicationKey,
                            @RequestHeader("X-client-identity") String clientIdentity,
                            @RequestBody QuoteSaveDto quoteSaveDto) {
        securityUtils.validateKey(applicationKey);
        rateLimitUtils.triggerRateLimit(clientIdentity);
        quoteService.createQuote(quoteSaveDto);
    }
}