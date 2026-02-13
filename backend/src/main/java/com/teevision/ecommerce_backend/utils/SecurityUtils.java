package com.teevision.ecommerce_backend.utils;
import lombok.experimental.UtilityClass;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;

@Service
public class SecurityUtils {

    @Value("${teevision.app.secret.key}")
    private String secretKey;

    @Value("${teevision.app.secret.iv}")
    private String secretIv;

    @Value("${teevision.app.secret.message}")
    private String secretMessage;

    private String decrypt(String encryptedText) throws Exception {
        Base64.Decoder decoder = Base64.getDecoder();
        byte[] encrypted1 = decoder.decode(encryptedText);

        Cipher cipher = Cipher.getInstance("AES/CBC/NoPadding");
        SecretKeySpec keyspec = new SecretKeySpec(secretKey.getBytes(), "AES");
        IvParameterSpec ivspec = new IvParameterSpec(secretIv.getBytes());

        cipher.init(Cipher.DECRYPT_MODE, keyspec, ivspec);

        byte[] original = cipher.doFinal(encrypted1);
        String originalString = new String(original);
        return originalString.trim();
    }

    public void validateKey(String key) {
        try{
            String decryptedMessage = decrypt(key);
            if (!decryptedMessage.equals(secretMessage)) {
                throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Invalid key");
            }
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Invalid key");
        }

    }
}
