package com.hackathon.finalproject.Service;

import com.hackathon.finalproject.entity.Course;
import com.hackathon.finalproject.entity.UserMail;


public interface UserMailService {
    UserMail store(String email);
    UserMail store(String email, Course course);

}
