import styled from "styled-components";
import { Button } from "components/Button/Button";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { BASE_URL } from "url/url";
import { Card } from "../components/Card/Card"

import axios from "axios";

const PageStyled = styled.div`
  h3 {
    color: #464444;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin: 40px 0px 13px 0px;
    min-width: 102px;
  }
  .filter-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .filter-button {
    width: 100%;
    display: flex;
    justify-content: end;
    margin-top: 27px;
    margin-bottom: 20px;
    color: #fff;
    text-align: center;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-bottom: 20px;
    box-shadow: 0 1px 0 0 #edebeb;
  }
  .card-test {
    width: 375px;
    height: 422px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #fff;
    margin-bottom: 33px;
    box-shadow:
      0px 4px 34px 0px rgba(0, 0, 0, 0.05),
      0px -4px 34px 0px rgba(0, 0, 0, 0.05);
  }
  .cards-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 6px;
  }
`;

const HourOfPurchaseHistoryPage = () => {
  const user = localStorage.getItem('user')

  const [courses, setCourses] = useState([]);
  const [userFetch, setUserFetch] = useState([]);

  const [orders, setOrders] = useState([]);
  const [charArray, setCharAray] = useState("");
  const [userCourses, setUserCourses] = useState([]);

  useEffect(() => {
        
    fetch(`${BASE_URL}/admin/courses`)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });

    
  }, []);


  useEffect(() => {
    console.log(user)
    const url = `${BASE_URL}/admin/order/${user}`
    console.log(url)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
   
  }, []);
  console.log(orders)
  
  return (
  <PageStyled>
    <div>
      <h2>Order User: {user}</h2>
    </div>
    <div></div>
    <div className="cards-wrapper">
      <table style={{width: "100%", border: "1px dashed #000000", marginTop: "20px"}}>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Status</th>
            <th>Course buy</th>
            <th>Order date</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order, index) => (
            <tr style={{textAlign: "center"}} className="card" key={index}>
              <td>{order.orderId}</td>
              <td>{order.status}</td>
              <td>{order.courses}</td>
              <td>{order.orderDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </PageStyled>
  )
};
export default HourOfPurchaseHistoryPage;
