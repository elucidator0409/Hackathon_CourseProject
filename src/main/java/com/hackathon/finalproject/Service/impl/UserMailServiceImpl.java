package com.hackathon.finalproject.Service.impl;

import com.hackathon.finalproject.Repository.UserMailRepository;
import com.hackathon.finalproject.Service.UserMailService;
import com.hackathon.finalproject.entity.Course;
import com.hackathon.finalproject.entity.UserMail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserMailServiceImpl implements UserMailService {
    @Autowired
    UserMailRepository userMailRepository;

    @Override
    public UserMail store(String email) {
        UserMail userMail = new UserMail(email);
        return userMailRepository.save(userMail);
    }

    @Override
    public UserMail store(String email, Course course) {
        UserMail userMail = new UserMail(email, course);
        return userMailRepository.save(userMail);

    }
}
