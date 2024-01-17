import styled from "styled-components";
import React, { useEffect, useState } from "react";
import "../ProductList/productList.css";
import { Card } from "../Card/Card";

import avatar1 from "assets/images/avatars/avatar1.svg";

import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';

import { BASE_URL } from "url/url";


const ProductList = () => {
  const responsiveAlice = {
    0: { items: 1 },
    568: { items: 2 },
    800: { items: 3 },
    1024: { items: 3,
            itemsFit: 'contain',
    },
  };
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 4,
  //   },
  //   minidesktop: {
  //     breakpoint: { max: 1190, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1080, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };
  
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/admin/courses`)
      .then((res) => res.json())
      .then((result) => {
        setCourses(result);
      });
  }, []);

  return (
    <>
     {console.log(courses)}
      <div className="product-container">
        <AliceCarousel 
          mouseTracking
          responsive={responsiveAlice}
          controlsStrategy="alternate"
          disableDotsControls={true}
          autoPlay
          autoPlayInterval={5000}
          animationDuration={1000}
          infinite
        >
          {courses.map((courses) => (
            <Card
              className="product"
              id={courses.courseId}
              avatar={avatar1}
              tutorName={"Diallo Liam"}
              courseName={courses.name}
              rating={courses.rating}
              thumbnail={courses.thumbnail}
            />
          ))}
        </AliceCarousel >
      </div>
    </>
  );
};

export default ProductList;
