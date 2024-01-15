package com.hackathon.finalproject.Service;

import com.hackathon.finalproject.entity.Order;

import java.io.IOException;
import java.util.Date;

public interface OrderService {
    Order store(String orderId, Date orderDate, double amount, String status, String courses, String userMail) throws IOException;

    Order getOrderByMail(String userMail);

}
