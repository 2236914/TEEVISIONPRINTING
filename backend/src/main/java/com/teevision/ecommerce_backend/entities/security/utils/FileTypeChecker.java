package com.teevision.ecommerce_backend.entities.security.utils;

import lombok.experimental.UtilityClass;

@UtilityClass
public class FileTypeChecker {

    public static String getFileType(String fileUrl) {
        if (fileUrl.endsWith(".png")) {
            return "PNG";
        } else if (fileUrl.endsWith(".pdf")) {
            return "PDF";
        } else if (fileUrl.endsWith(".jpg") || fileUrl.endsWith(".jpeg")) {
            return "JPEG";
        }
        return "Unknown";
    }
}
