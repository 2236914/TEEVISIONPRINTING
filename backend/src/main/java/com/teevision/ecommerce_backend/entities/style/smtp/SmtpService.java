package com.teevision.ecommerce_backend.entities.smtp;


import jakarta.mail.internet.MimeMessage;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class SmtpService {

    @Autowired
    private JavaMailSender emailSender;

    @Value("${spring.mail.fromEmail}")
    private String fromEmail;

    public void sendEmail(String to, String subject, String body) {
        try {
            MimeMessage message = emailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message);
            helper.setFrom(fromEmail, "Teevision Printing");
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(body, true);

            log.info("Sending email to: " + to);
            emailSender.send(message);

            log.info("Email sent successfully");
        } catch (Exception e) {
            log.error("Error sending email: " + e.getMessage());
        }
    }
}
