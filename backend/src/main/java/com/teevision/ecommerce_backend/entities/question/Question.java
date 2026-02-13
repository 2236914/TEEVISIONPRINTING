package com.teevision.ecommerce_backend.entities.question;

import com.teevision.ecommerce_backend.entities.question.dto.QuestionResponseDto;
import com.teevision.ecommerce_backend.entities.question.dto.QuestionSaveDto;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@ToString
@NoArgsConstructor
@Getter
@Setter
@Table(name = "questions")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "email")
    private String email;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "company_name")
    private String companyName;

    @Column(name = "inquiry_details")
    private String inquiryDetails;

    @Column(name = "preferred_contact_method")
    private String preferredContactMethod;

    public QuestionResponseDto convertToResponseDto() {
        return new QuestionResponseDto(
                id, fullName, email, phoneNumber, companyName, inquiryDetails, preferredContactMethod
        );
    }

    public void convertToEntity(QuestionSaveDto questionSaveDto) {
        this.fullName = questionSaveDto.fullName();
        this.email = questionSaveDto.email();
        this.phoneNumber = questionSaveDto.phoneNumber();
        this.companyName = questionSaveDto.companyName();
        this.inquiryDetails = questionSaveDto.inquiryDetails();
        this.preferredContactMethod = questionSaveDto.preferredContactMethod();
    }
}
