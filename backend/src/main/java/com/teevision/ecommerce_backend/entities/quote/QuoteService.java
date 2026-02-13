package com.teevision.ecommerce_backend.entities.quote;

import com.teevision.ecommerce_backend.entities.quote.dto.QuoteResponseDto;
import com.teevision.ecommerce_backend.entities.quote.dto.QuoteSaveDto;
import com.teevision.ecommerce_backend.entities.security.utils.FileTypeChecker;
import com.teevision.ecommerce_backend.entities.smtp.SmtpService;
import com.teevision.ecommerce_backend.web.RecordNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class QuoteService {

    private final JpaQuoteRepository jpaQuoteRepository;
    private final SmtpService smtpService;

    // Updated to include all supported image types
    private static final List<String> IMAGE_TYPES = List.of(
        "JPEG", 
        "JPG", 
        "PNG", 
        "GIF", 
        "WEBP", 
        "SVG"
    );
    
    // Non-image files that should be displayed as download links
    private static final List<String> DOCUMENT_TYPES = List.of(
        "PDF", 
        "AI", 
        "PSD", 
        "EPS"
    );
    
    private static final int MINIMUM_ORDER_QUANTITY = 12;

    @Value("${spring.mail.fromEmail}")
    private String fromEmail;

    public List<QuoteResponseDto> getAllQuotes() {
        return jpaQuoteRepository.findAll().stream()
                .map(Quote::convertToResponseDto)
                .toList();
    }

    public QuoteResponseDto getQuoteById(long id) {
        return jpaQuoteRepository.findById(id)
                .map(Quote::convertToResponseDto)
                .orElseThrow(() -> new RecordNotFoundException("Quote not found"));
    }

    public void createQuote(QuoteSaveDto quoteSaveDto) {
        // Validate the quote before saving
        validateQuote(quoteSaveDto);
        
        Quote quote = new Quote();
        quote.convertToEntity(quoteSaveDto);
        jpaQuoteRepository.save(quote);

        smtpService.sendEmail(quote.getEmail(), "Thank You for Reaching Out to Tee Vision Printing!", getCustomerEmailTemplate(quoteSaveDto));
        smtpService.sendEmail(fromEmail, "You have a New Quote Request!", getSalesTeamEmailTemplate(quoteSaveDto));
    }

    private void validateQuote(QuoteSaveDto quoteSaveDto) {
        // Skip product validation if it's a special request
        if (quoteSaveDto.hasSpecialRequest()) {
            return;
        }

        // Validate color counts (must be between 0 and 6)
        if (quoteSaveDto.frontNumberOfColors() < 0 || quoteSaveDto.frontNumberOfColors() > 6) {
            throw new IllegalArgumentException("Front number of colors must be between 0 and 6");
        }

        if (quoteSaveDto.backNumberOfColors() < 0 || quoteSaveDto.backNumberOfColors() > 6) {
            throw new IllegalArgumentException("Back number of colors must be between 0 and 6");
        }

        // Validate minimum quantity
        int totalQuantity = quoteSaveDto.extraSmallQuantity() +
                quoteSaveDto.smallQuantity() +
                quoteSaveDto.mediumQuantity() +
                quoteSaveDto.largeQuantity() +
                quoteSaveDto.extraLargeQuantity() +
                quoteSaveDto.twoExtraLargeQuantity() +
                quoteSaveDto.threeExtraLargeQuantity() +
                quoteSaveDto.fourExtraLargeQuantity() +
                quoteSaveDto.fiveExtraLargeQuantity();

        if (totalQuantity < MINIMUM_ORDER_QUANTITY) {
            throw new IllegalArgumentException("Minimum order quantity is " + MINIMUM_ORDER_QUANTITY + " shirts");
        }
    }

    private String getCustomerEmailTemplate(QuoteSaveDto quoteSaveDto) {
        // Handle multiple images separated by comma
        String fileString = "";
        if (quoteSaveDto.artworkImageUrl() != null && !quoteSaveDto.artworkImageUrl().isEmpty()) {
            String[] imageUrls = quoteSaveDto.artworkImageUrl().split(",");
            StringBuilder fileStringBuilder = new StringBuilder();
            
            for (String url : imageUrls) {
                String trimmedUrl = url.trim();
                String fileType = FileTypeChecker.getFileType(trimmedUrl);
                boolean isImageType = IMAGE_TYPES.contains(fileType);
                
                if (isImageType) {
                    fileStringBuilder.append("                    <div style=\"margin: 10px 0;\">\n");
                    fileStringBuilder.append("                        <img class=\"artwork-img\" src=\"")
                        .append(trimmedUrl)
                        .append("\" alt=\"Artwork\" style=\"max-width: 300px; height: auto;\" />\n");
                    fileStringBuilder.append("                    </div>\n");
                } else {
                    String fileName = trimmedUrl.substring(trimmedUrl.lastIndexOf("/") + 1);
                    fileStringBuilder.append("                    <div style=\"margin: 5px 0;\">\n");
                    fileStringBuilder.append("                        <a href=\"")
                        .append(trimmedUrl)
                        .append("\" style=\"color: #0066cc; text-decoration: none;\">📎 ")
                        .append(fileName)
                        .append("</a>\n");
                    fileStringBuilder.append("                    </div>\n");
                }
            }
            fileString = fileStringBuilder.toString();
        }

        return "<!DOCTYPE html>\n" +
                "<html lang=\"en\">\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                "    <title>Thank You for Reaching Out to Tee Vision Printing!</title>\n" +
                "    <style>\n" +
                "        body {\n" +
                "            font-family: Arial, sans-serif;\n" +
                "            background-color: #f4f4f4;\n" +
                "            margin: 0;\n" +
                "            padding: 0;\n" +
                "            line-height: 1.5\n" +
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
                "        .artwork-img {\n" +
                "            max-width: 300px;\n" +
                "            height: auto;\n" +
                "        }\n" +
                "    </style>\n" +
                "</head>\n" +
                "<body>\n" +
                "    <div class=\"background\">\n" +
                "        <div class=\"container\">\n" +
                "            <div class=\"header\">\n" +
                "                <img src=\"https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/logo.png\" alt=\"Tee Vision Logo\" />\n" +
                "                <h1>Thank You for Reaching Out to Tee Vision Printing!</h1>\n" +
                "            </div>\n" +
                "            <div class=\"content\">\n" +
                "                <h2>Hi " + quoteSaveDto.fullName() + ",</h2>\n" +
                "                <p>Thank you for contacting Tee Vision Printing! We have received your quote and our team is excited to help bring your vision to life. Below is a summary of the information you provided:</p>\n" +
                "                <ul>\n" +
                "                    <li><strong>Email:</strong> " + quoteSaveDto.email() + "</li>\n" +
                "                    <li><strong>Phone Number:</strong> " + quoteSaveDto.phoneNumber() + "</li>\n" +
                "                    <li><strong>Due Date:</strong> " + (quoteSaveDto.dueDate() != null ? quoteSaveDto.dueDate() : "N/A") + "</li>\n" +
                "                    <li><strong>Special Request:</strong> " + (quoteSaveDto.hasSpecialRequest() ? "yes" : "no") + "</li>\n" +
                "                    " + (!quoteSaveDto.hasSpecialRequest() ?
                "                    <li><strong>Product:</strong> " + quoteSaveDto.productName() + "</li>\n" +
                        "                    <li><strong>Color:</strong> " + quoteSaveDto.productColor() + "</li>\n" +
                        "                    <li><strong>Number of Front Colors:</strong> " + quoteSaveDto.frontNumberOfColors() + "</li>\n" +
                        "                    <li><strong>Number of Back Colors:</strong> " + quoteSaveDto.backNumberOfColors() + "</li>\n" +
                        "                    <li><strong>Create my Artwork:</strong> " + (quoteSaveDto.createArtwork() ? "yes" : "no") + "</li>\n" +
                        "                    <li><strong>Need a Designer:</strong> " + (quoteSaveDto.needsDesigner() ? "yes" : "no") + "</li>\n" +
                        "                    <li><strong>Sizes & Quantities:</strong></li>\n" +
                        "                    <ul>\n" +
                        "                        <li>XS: " + quoteSaveDto.extraSmallQuantity() + "</li>\n" +
                        "                        <li>S: " + quoteSaveDto.smallQuantity() + "</li>\n" +
                        "                        <li>M: " + quoteSaveDto.mediumQuantity() + "</li>\n" +
                        "                        <li>L: " + quoteSaveDto.largeQuantity() + "</li>\n" +
                        "                        <li>XL: " + quoteSaveDto.extraLargeQuantity() + "</li>\n" +
                        "                        <li>2XL: " + quoteSaveDto.twoExtraLargeQuantity() + "</li>\n" +
                        "                        <li>3XL: " + quoteSaveDto.threeExtraLargeQuantity() + "</li>\n" +
                        "                        <li>4XL: " + quoteSaveDto.fourExtraLargeQuantity() + "</li>\n" +
                        "                        <li>5XL: " + quoteSaveDto.fiveExtraLargeQuantity() + "</li>\n" +
                        "                    </ul>" : "") + "\n" +
                "                    <li><strong>Additional Notes:</strong> " + quoteSaveDto.additionalNotes() + "</li>\n" +
                "                    " + (quoteSaveDto.artworkImageUrl() != null && (!quoteSaveDto.artworkImageUrl().isEmpty()) ?
                "                    <li><strong>Artwork Files:</strong></li>\n" +
                    fileString : "") + "\n" +
                "                </ul>\n" +
                "                <p>Our team will review your details and get back to you shortly to confirm your order and discuss any further steps. If you need immediate assistance, please don't hesitate to contact us at (267) 538-5331.</p>\n" +
                "                <p>We appreciate your trust in Tee Vision Printing and look forward to delivering high-quality results for your project.</p>\n" +
                "            </div>\n" +
                "            <div class=\"footer\">\n" +
                "                <p>Best regards,<br>The Tee Vision Printing Team</p>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "</body>\n" +
                "</html>";
    }

    public String getSalesTeamEmailTemplate(QuoteSaveDto quoteSaveDto) {
        // Handle multiple images separated by comma
        String fileString = "";
        if (quoteSaveDto.artworkImageUrl() != null && !quoteSaveDto.artworkImageUrl().isEmpty()) {
            String[] imageUrls = quoteSaveDto.artworkImageUrl().split(",");
            StringBuilder fileStringBuilder = new StringBuilder();
            
            for (String url : imageUrls) {
                String trimmedUrl = url.trim();
                String fileType = FileTypeChecker.getFileType(trimmedUrl);
                boolean isImageType = IMAGE_TYPES.contains(fileType);
                
                if (isImageType) {
                    fileStringBuilder.append("                    <div style=\"margin: 10px 0;\">\n");
                    fileStringBuilder.append("                        <img class=\"artwork-img\" src=\"")
                        .append(trimmedUrl)
                        .append("\" alt=\"Artwork\" style=\"max-width: 300px; height: auto;\" />\n");
                    fileStringBuilder.append("                    </div>\n");
                } else {
                    String fileName = trimmedUrl.substring(trimmedUrl.lastIndexOf("/") + 1);
                    fileStringBuilder.append("                    <div style=\"margin: 5px 0;\">\n");
                    fileStringBuilder.append("                        <a href=\"")
                        .append(trimmedUrl)
                        .append("\" style=\"color: #0066cc; text-decoration: none;\">📎 ")
                        .append(fileName)
                        .append("</a>\n");
                    fileStringBuilder.append("                    </div>\n");
                }
            }
            fileString = fileStringBuilder.toString();
        }

        return "<!DOCTYPE html>\n" +
                "<html lang=\"en\">\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                "    <title>New Quote Request from Tee Vision Printing</title>\n" +
                "    <style>\n" +
                "        body {\n" +
                "            font-family: Arial, sans-serif;\n" +
                "            background-color: #f4f4f4;\n" +
                "            margin: 0;\n" +
                "            padding: 0;\n" +
                "            line-height: 1.5\n" +
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
                "        .artwork-img {\n" +
                "            max-width: 300px;\n" +
                "            height: auto;\n" +
                "        }\n" +
                "    </style>\n" +
                "</head>\n" +
                "<body>\n" +
                "    <div class=\"background\">\n" +
                "        <div class=\"container\">\n" +
                "            <div class=\"header\">\n" +
                "                <img src=\"https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/logo.png\" alt=\"Tee Vision Logo\" />\n" +
                "                <h1>New Quote Request from Tee Vision Printing</h1>\n" +
                "            </div>\n" +
                "            <div class=\"content\">\n" +
                "                <h2>Quote Details</h2>\n" +
                "                <ul>\n" +
                "                    <li><strong>Full Name:</strong> " + quoteSaveDto.fullName() + "</li>\n" +
                "                    <li><strong>Email:</strong> " + quoteSaveDto.email() + "</li>\n" +
                "                    <li><strong>Phone Number:</strong> " + quoteSaveDto.phoneNumber() + "</li>\n" +
                "                    <li><strong>Due Date:</strong> " + (quoteSaveDto.dueDate() != null ? quoteSaveDto.dueDate() : "N/A") + "</li>\n" +
                "                    <li><strong>Special Request:</strong> " + (quoteSaveDto.hasSpecialRequest() ? "yes" : "no") + "</li>\n" +
                "                    " + (!quoteSaveDto.hasSpecialRequest() ?
                "                    <li><strong>Product:</strong> " + quoteSaveDto.productName() + "</li>\n" +
                        "                    <li><strong>Color:</strong> " + quoteSaveDto.productColor() + "</li>\n" +
                        "                    <li><strong>Number of Front Colors:</strong> " + quoteSaveDto.frontNumberOfColors() + "</li>\n" +
                        "                    <li><strong>Number of Back Colors:</strong> " + quoteSaveDto.backNumberOfColors() + "</li>\n" +
                        "                    <li><strong>Create my Artwork:</strong> " + (quoteSaveDto.createArtwork() ? "yes" : "no") + "</li>\n" +
                        "                    <li><strong>Need a Designer:</strong> " + (quoteSaveDto.needsDesigner() ? "yes" : "no") + "</li>\n" +
                        "                    <li><strong>Sizes & Quantities:</strong></li>\n" +
                        "                    <ul>\n" +
                        "                        <li>XS: " + quoteSaveDto.extraSmallQuantity() + "</li>\n" +
                        "                        <li>S: " + quoteSaveDto.smallQuantity() + "</li>\n" +
                        "                        <li>M: " + quoteSaveDto.mediumQuantity() + "</li>\n" +
                        "                        <li>L: " + quoteSaveDto.largeQuantity() + "</li>\n" +
                        "                        <li>XL: " + quoteSaveDto.extraLargeQuantity() + "</li>\n" +
                        "                        <li>2XL: " + quoteSaveDto.twoExtraLargeQuantity() + "</li>\n" +
                        "                        <li>3XL: " + quoteSaveDto.threeExtraLargeQuantity() + "</li>\n" +
                        "                        <li>4XL: " + quoteSaveDto.fourExtraLargeQuantity() + "</li>\n" +
                        "                        <li>5XL: " + quoteSaveDto.fiveExtraLargeQuantity() + "</li>\n" +
                        "                    </ul>" : "") + "\n" +
                "                    <li><strong>Additional Notes:</strong> " + quoteSaveDto.additionalNotes() + "</li>\n" +
                "                    " + (quoteSaveDto.artworkImageUrl() != null && (!quoteSaveDto.artworkImageUrl().isEmpty()) ?
                "                    <li><strong>Artwork Files:</strong></li>\n" +
                    fileString : "") + "\n" +
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