package com.CyclingConnect.cyclingconnect.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import com.CyclingConnect.cyclingconnect.models.User;
import java.util.List;

/**
 * Repositório para operações relacionadas a usuários.
 */
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    /**
     * Busca um usuário pelo login.
     * 
     * @param login O login do usuário a ser buscado.
     * @return Os detalhes do usuário encontrado.
     */
    UserDetails findByLogin(String login);

    @Query("SELECT u FROM User u WHERE u.login = :login")
    User findByLoginAsync(String login);

    @Query("SELECT u FROM User u WHERE u.email = :email")
    User findByEmailAsync(String email);

}
