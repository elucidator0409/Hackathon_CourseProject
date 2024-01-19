package com.hackathon.finalproject.Service;

import com.hackathon.finalproject.entity.Course;
import com.hackathon.finalproject.entity.User;

import java.util.List;
import java.util.Optional;
public interface UserService {
    List<User> getAllUsers();
    User getUserById(Long id);

    Optional<User> getUserByEmail(String email);

    List<Course> getCoursesByUserEmail(String userEmail);

    Optional<User> findById(Long id);

    User save(User user);

    List<User> getAllTutor();
}
