// src/components/ServicesSlider.jsx
"use client";

import { useState,useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import LaserHairRemoval from "../assets/images/services/laser-hair-removal.jpg"



export default function ServicesSlider() {
  const slides = [
    {
      title: "Laser Hair Removal",
      img: LaserHairRemoval,
    },
    {
      title: "Dermatologic Surgery",
      img: LaserHairRemoval,
    },
    {
      title: "Earlobe Repair",
      img: LaserHairRemoval,
    },
    {
      title: "Laser Resurfacing",
      img: LaserHairRemoval,
    },
    {
      title: "Anti Aging",
      img: LaserHairRemoval,
    },
  ];

  return (
    <Swiper
      className="services-slider overflow-visible"
      slidesPerView="auto"
      spaceBetween={16}
      centeredSlides={false}
    >
      {slides.map((s, i) => (
        <SwiperSlide
          key={i}
          className="!flex !w-auto !h-auto !items-stretch"
        >
          <div
            className="flex flex-col items-center justify-between rounded-2xl overflow-hidden text-white text-center cursor-pointer flex-shrink-0 w-[110px] sm:w-[130px] lg:w-[140px] 2xl:w-[160px] min-h-[300px] relative"
            style={{
              backgroundImage: `url(${s.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          >
            <div className="absolute inset-0 bg-secondary/70" />
            <div className="relative z-[2] flex flex-col gap-4 py-5">
              <div className="btn btn-square btn-white shadow-btn [writing-mode:tb-rl] !rounded-5xl text-2xl flex items-center justify-center !w-[45px] !h-[45px]">
                <i className="feather icon-arrow-up-right" />
              </div>
              <h3 className="font-normal text-base text-white [writing-mode:vertical-rl] rotate-180 leading-tight">
                {s.title}
              </h3>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}


