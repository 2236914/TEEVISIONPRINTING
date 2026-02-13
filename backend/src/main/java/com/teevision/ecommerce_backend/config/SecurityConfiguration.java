package com.teevision.ecommerce_backend.config;

import com.teevision.ecommerce_backend.entities.security.filters.JwtAuthenticationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/v1/auth/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/v1/main-categories/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/v1/categories/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/v1/products/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/v1/products",
                                "/api/v1/products/{id}",
                                "/api/v1/products/slug/{slug}",
                                "/api/v1/colors",
                                "/api/v1/colors/paginated",
                                "/api/v1/categories",
                                "/api/v1/brands",
                                "/api/v1/styles",
                                "/api/v1/fits",
                                "/api/v1/blogs",
                                "/api/v1/blogs/{id}",
                                "/api/v1/blogs/slug/{slug}",
                                "/api/v1/image-assets",
                                "/api/v1/price-settings",
                                "/api/v1/products/home-page").permitAll()
                        .requestMatchers(HttpMethod.POST,"/api/v1/products/calculate-final-price", "/api/v1/quotes", "/api/v1/questions").permitAll()
                        .anyRequest()
                        .authenticated()
                )
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
                .httpBasic(withDefaults());

        return http.build();
    }
}
