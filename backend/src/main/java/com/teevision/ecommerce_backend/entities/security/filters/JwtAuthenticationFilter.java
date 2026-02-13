package com.teevision.ecommerce_backend.entities.security.filters;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.teevision.ecommerce_backend.entities.security.utils.JwtService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.math.BigInteger;
import java.security.KeyFactory;
import java.security.interfaces.RSAPublicKey;
import java.security.spec.RSAPublicKeySpec;
import java.util.Base64;
import java.util.List;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;

    @Value("${teevision.app.cognito.issuer}")
    private String cognitoIssuer;

    @Value("${teevision.app.cognito.publicKeyParameters.n}")
    private String publicKeyParametersN;

    @Value("${teevision.app.cognito.publicKeyParameters.e}")
    private String publicKeyParametersE;

    private RSAPublicKey loadPublicKey() {
        try {

            // Decode the Base64 URL-encoded strings
            byte[] modulusBytes = Base64.getUrlDecoder().decode(publicKeyParametersN);
            byte[] exponentBytes = Base64.getUrlDecoder().decode(publicKeyParametersE);

            // Convert the bytes into BigInteger representations
            BigInteger modulus = new BigInteger(1, modulusBytes);
            BigInteger exponent = new BigInteger(1, exponentBytes);

            // Create an RSA public key using the modulus and exponent
            RSAPublicKeySpec spec = new RSAPublicKeySpec(modulus, exponent);
            KeyFactory keyFactory = KeyFactory.getInstance("RSA");
            return (RSAPublicKey) keyFactory.generatePublic(spec);

        } catch (Exception e) {
            throw new RuntimeException("Failed to load public key from JWKS", e);
        }
    }

    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request,
                                    @NonNull HttpServletResponse response,
                                    @NonNull FilterChain filterChain) throws ServletException, IOException {

        final String authorizationHeader = request.getHeader("Authorization");
        if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        String token = authorizationHeader.substring(7);

        RSAPublicKey publicKey = loadPublicKey();
        Algorithm algorithm = Algorithm.RSA256(publicKey, null);
        DecodedJWT jwt = JWT.require(algorithm)
                .withIssuer(cognitoIssuer)
                .build()
                .verify(token);

        String username = jwt.getSubject();
        Authentication authentication = new UsernamePasswordAuthenticationToken(username, null, List.of());
        SecurityContextHolder.getContext().setAuthentication(authentication);

        filterChain.doFilter(request, response);
    }
}
