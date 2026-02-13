package com.teevision.ecommerce_backend.entities.security;

import com.teevision.ecommerce_backend.entities.security.dto.AuthenticationRequest;
import com.teevision.ecommerce_backend.entities.security.dto.AuthenticationResponse;
import com.teevision.ecommerce_backend.entities.security.dto.RegisterRequest;
import com.teevision.ecommerce_backend.entities.security.utils.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;


    public AuthenticationResponse register(RegisterRequest registerRequest) {

        String encodedPassword = passwordEncoder.encode(registerRequest.getPassword());
        var user = User.builder()
                .firstname(registerRequest.getFirstname())
                .lastname(registerRequest.getLastname())
                .username(registerRequest.getUsername())
                .password(encodedPassword)
                .role(Role.ADMIN)
                .build();

        userRepository.save(user);

        var token = jwtService.generateToken(user);

        return AuthenticationResponse.builder()
                .token(token)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest authenticationRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authenticationRequest.getUsername(),
                        authenticationRequest.getPassword())
        );

        var user = userRepository.findByUsername(authenticationRequest.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        var token = jwtService.generateToken(user);

        return AuthenticationResponse.builder()
                .token(token)
                .build();
    }
}
