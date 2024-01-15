package com.hackathon.finalproject.Service.impl;

import com.hackathon.finalproject.Repository.OrderRepository;
import com.hackathon.finalproject.Repository.UserRepository;
import com.hackathon.finalproject.entity.User;
import com.hackathon.finalproject.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private OrderRepository orderRepository;
    @Override
    public List<User> getAllUsers() {
        return null;
    }

    @Override
    public User getUserById(Long id) {
        return null;
    }

    @Override
    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public Optional<User> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public User save(User user) {
        return null;
    }

    @Override
    public List<User> getAllTutor() {
        return userRepository.findAllTutor();

    }
}
