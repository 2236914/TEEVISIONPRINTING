package com.teevision.ecommerce_backend.entities.question;

import com.teevision.ecommerce_backend.entities.question.dto.QuestionResponseDto;
import com.teevision.ecommerce_backend.entities.question.dto.QuestionSaveDto;
import com.teevision.ecommerce_backend.utils.RateLimitUtils;
import com.teevision.ecommerce_backend.utils.SecurityUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/questions")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class QuestionController {

    private final QuestionService questionService;
    private final SecurityUtils securityUtils;
    private final RateLimitUtils rateLimitUtils;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<QuestionResponseDto> getAllQuestions() {
        return questionService.getAllQuestions();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public QuestionResponseDto getQuestionById(@PathVariable long id) {
        return questionService.getQuestionById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createQuestion(@RequestHeader("X-application-key") String applicationKey,
                               @RequestHeader("X-client-identity") String clientIdentity,
                               @RequestBody QuestionSaveDto questionSaveDto) {
        securityUtils.validateKey(applicationKey);
        rateLimitUtils.triggerRateLimit(clientIdentity);
        questionService.createQuestion(questionSaveDto);
    }
}
