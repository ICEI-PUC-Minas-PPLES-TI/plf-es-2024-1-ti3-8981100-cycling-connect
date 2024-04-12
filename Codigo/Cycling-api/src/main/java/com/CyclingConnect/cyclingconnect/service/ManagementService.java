package com.CyclingConnect.cyclingconnect.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.CyclingConnect.cyclingconnect.models.User;

import com.CyclingConnect.cyclingconnect.repositories.UserRepository;

@Service
public class ManagementService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmailService emailService;

    @Autowired
    PasswordEncoder passwordEncoder;

    public String RequestPasswordCode(String email) {
        User user = userRepository.findByEmailAsync(email);
        user.setCode(getCode(user.getId()));
        user.setCodeExpiration(new Date());
        userRepository.saveAndFlush(user);

        emailService.sendEmailText(email, "Código de recuperação de senha",
                "Seu código de recuperação de senha é: " + user.getCode());

        return "Codigo enviado!";
    }

    public String changePassword(User user) {

        User userBd = userRepository.findByEmalAndCode(user.getEmail(), user.getCode());
        if (userBd != null) {
            Date diferent = new Date(new Date().getTime() - user.getCodeExpiration().getTime());

            if (diferent.getTime() / 1000 < 900) {
                userBd.setPassword(passwordEncoder.encode(user.getPassword()));
                userBd.setCode(null);
                userRepository.saveAndFlush(userBd);
                return "Senha alterada com sucesso!";
            } else {
                return "Código expirado! Solicite um novo código!";
            }
        } else {
            return "Email ou código não encontrado!";
        }
    }

    private String getCode(Integer id) {
        DateFormat format = new SimpleDateFormat("ddMMyyyyHHmmss");
        return format.format(new Date()) + id;

    }
}
