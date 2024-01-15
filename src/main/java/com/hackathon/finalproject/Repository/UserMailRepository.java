package com.hackathon.finalproject.Repository;

import com.hackathon.finalproject.entity.UserMail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserMailRepository extends JpaRepository<UserMail, Long> {

}
