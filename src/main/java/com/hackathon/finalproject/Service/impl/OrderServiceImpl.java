package com.hackathon.finalproject.Service.impl;

import com.hackathon.finalproject.Repository.OrderRepository;
import com.hackathon.finalproject.Repository.UserRepository;
import com.hackathon.finalproject.entity.Order;
import com.hackathon.finalproject.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Date;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Order store(String orderId, Date orderDate, double amount, String status, String courses, String userMail) throws IOException {

        Order order = new Order(orderId, orderDate, amount, status, courses, userMail);
        return orderRepository.save(order);
    }

    @Override
    public Order getOrderByMail(String userMail) {
        Optional<Order> result = orderRepository.findByUserMail(userMail);
        if(result.isPresent())
            return result.get();
        return new Order();
    }


}
