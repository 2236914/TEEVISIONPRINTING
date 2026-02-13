package com.teevision.ecommerce_backend.utils;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.web.server.ResponseStatusException;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertThrows;

class SecurityUtilsTest {

    @Autowired
    SecurityUtils securityUtils;

    @Test
    void test_decrypting() {
        // ReflectionTestUtils.setField(SecurityUtils.class, "secretKey", "WO7w7yyL4xsZJgWI");
        // ReflectionTestUtils.setField(SecurityUtils.class, "secretIv", "D1vPUYVBlGhvIUNl");
        // ReflectionTestUtils.setField(SecurityUtils.class, "secretMessage", "Hello, World!");

        // String encryptedText = "m63EyhW386xZVmdRmlFTmQ==";
        // String wrongEncryptedText = "m63EyhW386xZVmdRmlFTmQ=+";
        // assertDoesNotThrow(() -> {
        //     securityUtils.validateKey(encryptedText);
        // });
        // assertThrows(ResponseStatusException.class, () -> {
        //     securityUtils.validateKey(wrongEncryptedText);
        // });
    }
}
