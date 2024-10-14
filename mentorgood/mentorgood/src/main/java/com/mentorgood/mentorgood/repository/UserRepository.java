package com.mentorgood.mentorgood.repository;

import com.mentorgood.mentorgood.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    public User findByUsername(String username);

    public User findByEmail(String email);

    public User findByUserId(int userId);
}
