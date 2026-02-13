package com.teevision.ecommerce_backend.entities.question;

import com.teevision.ecommerce_backend.entities.question.dto.QuestionResponseDto;
import com.teevision.ecommerce_backend.entities.question.dto.QuestionSaveDto;
import com.teevision.ecommerce_backend.entities.smtp.SmtpService;
import com.teevision.ecommerce_backend.web.RecordNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class QuestionService {

    private final JpaQuestionRepository jpaQuestionRepository;
    private final SmtpService smtpService;

    @Value("${spring.mail.fromEmail}")
    private String fromEmail;

    public List<QuestionResponseDto> getAllQuestions() {
        return jpaQuestionRepository.findAll().stream()
                .map(Question::convertToResponseDto)
                .collect(Collectors.toList());
    }

    public QuestionResponseDto getQuestionById(long id) {
        return jpaQuestionRepository.findById(id)
                .map(Question::convertToResponseDto)
                .orElseThrow(() -> new RecordNotFoundException("Question not found"));
    }

    public void createQuestion(QuestionSaveDto questionSaveDto) {
        Question question = new Question();
        question.convertToEntity(questionSaveDto);
        jpaQuestionRepository.save(question);
        smtpService.sendEmail(fromEmail, "There's a new question!", getSalesTeamEmailTemplate(questionSaveDto));
    }

    private String getSalesTeamEmailTemplate(QuestionSaveDto questionSaveDto) {
        return "<!DOCTYPE html>\n" +
                "<html lang=\"en\">\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                "    <title>New Question from Tee Vision Printing</title>\n" +
                "    <style>\n" +
                "        body {\n" +
                "            font-family: Arial, sans-serif;\n" +
                "            background-color: #f4f4f4;\n" +
                "            margin: 0;\n" +
                "            padding: 0;\n" +
                "            line-height: 1.5;\n" +
                "        }\n" +
                "        .background {\n" +
                "            background-color: #f4f4f4;\n" +
                "        }\n" +
                "        .container {\n" +
                "            width: 100%;\n" +
                "            max-width: 600px;\n" +
                "            margin: 20px auto;\n" +
                "            background-color: #ffffff;\n" +
                "            padding: 20px;\n" +
                "            border-radius: 8px;\n" +
                "            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n" +
                "        }\n" +
                "        .header {\n" +
                "            text-align: center;\n" +
                "            background-color: #000000;\n" +
                "            color: #FCDC5C;\n" +
                "            padding: 44px;\n" +
                "            border-radius: 8px 8px 0 0;\n" +
                "        }\n" +
                "        .header h1 {\n" +
                "            margin: 0;\n" +
                "            font-size: 24px;\n" +
                "            margin-top: 20px;\n" +
                "        }\n" +
                "        .header img {\n" +
                "            width: 200px;\n" +
                "        }\n" +
                "        .content {\n" +
                "            padding: 20px;\n" +
                "        }\n" +
                "        .content h2 {\n" +
                "            font-size: 20px;\n" +
                "            color: #333333;\n" +
                "        }\n" +
                "        .content p {\n" +
                "            font-size: 16px;\n" +
                "            color: #666666;\n" +
                "        }\n" +
                "        .content ul {\n" +
                "            list-style: none;\n" +
                "            padding: 0;\n" +
                "        }\n" +
                "        .content ul li {\n" +
                "            font-size: 16px;\n" +
                "            color: #333333;\n" +
                "            margin: 5px 0;\n" +
                "        }\n" +
                "        .footer {\n" +
                "            text-align: center;\n" +
                "            padding: 10px;\n" +
                "            background-color: #f4f4f4;\n" +
                "            border-radius: 0 0 8px 8px;\n" +
                "        }\n" +
                "        .footer p {\n" +
                "            font-size: 14px;\n" +
                "            color: #999999;\n" +
                "        }\n" +
                "    </style>\n" +
                "</head>\n" +
                "<body>\n" +
                "    <div class=\"background\">\n" +
                "        <div class=\"container\">\n" +
                "            <div class=\"header\">\n" +
                "                <img src=\"https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/logo.png\" />\n" +
                "                <h1>New Question from Tee Vision Printing</h1>\n" +
                "            </div>\n" +
                "            <div class=\"content\">\n" +
                "                <h2>Question Details</h2>\n" +
                "                <ul>\n" +
                "                    <li><strong>Full Name:</strong> " + questionSaveDto.fullName() + "</li>\n" +
                "                    <li><strong>Email:</strong> " + questionSaveDto.email() + "</li>\n" +
                "                    <li><strong>Phone Number:</strong> " + questionSaveDto.phoneNumber() + "</li>\n" +
                "                    <li><strong>Company Name:</strong> " + questionSaveDto.companyName() + "</li>\n" +
                "                    <li><strong>Inquiry Details:</strong> " + questionSaveDto.inquiryDetails() + "</li>\n" +
                "                    <li><strong>Preferred Contact Method:</strong> " + questionSaveDto.preferredContactMethod() + "</li>\n" +
                "                </ul>\n" +
                "            </div>\n" +
                "            <div class=\"footer\">\n" +
                "                <p>Best regards,<br>The Tee Vision Printing Team</p>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "</body>\n" +
                "</html>";
    }
}
