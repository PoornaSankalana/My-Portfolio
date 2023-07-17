import React from "react";
import { testimonialsData } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./testmonials.css";

const Testimonials = () => {
  return (
    <section id="testmonials">
      <h5>Reviews from the Professionals</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonialsData.map(({ name, avatar, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="avatar" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
