import React, { useState, useEffect, useRef } from "react";
import svg from "../assets/Vector17.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import nora from '../assets/images/nora.png';
import katrina from '../assets/images/katrina.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const sliderData = [
  { id: 1, image: nora, name: 'Nora Fatehi', event: 'an event hosted by XYZ', location: 'Pune', date: '14 March 2023' },
  { id: 2, image: katrina, name: 'Diljit Dosanjh', event: 'a grand music festival', location: 'Mumbai', date: '01 June 2024' },
];

const Recentshows = () => {
  const [scrollDirection, setScrollDirection] = useState("normal"); 
  const lastScrollY = useRef(0);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setScrollDirection("normal");
      } else {
        setScrollDirection("reverse");
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full relative p-10  overflow-hidden bg-[#090912] text-white">

      {/* Heading */}
      <div className="text-5xl text-center py-10 leading-tight">
        <h1>Recent shows made star-</h1>
        <h1>studded via StarClinch</h1>
      </div>

      {/* Marquee Top */}
      <div className="absolute top-30 -left-30 -rotate-40 w-1/2 overflow-hidden rounded-lg p-0.5 bg-linear-to-r from-black via-blue-500 to-black">
        <div className="bg-black w-full py-3 whitespace-nowrap overflow-hidden rounded-md">
          <div
            className={`flex gap-6 animate-marquee`}
            style={{ animationDirection: scrollDirection }}
          >
            {[...Array(2)].map((_, idx) => (
              <div className="flex gap-6" key={idx}>
                <img src={svg} width="30" />
                <span className="text-xl font-semibold">HEADLIGHTS OF TODAY</span>
                <img src={svg} width="30" />
                <span className="text-xl font-semibold">HEADLIGHTS OF TODAY</span>
                <img src={svg} width="30" />
                <span className="text-xl font-semibold">HEADLIGHTS OF TODAY</span>
                <img src={svg} width="30" />
                <span className="text-xl font-semibold">HEADLIGHTS OF TODAY</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="w-[70%] my-10 relative">

          <button ref={prevRef} className="absolute bg-gray-800 border border-white/50 rounded-full p-4 left-0 top-1/2 transform -translate-y-1/2 z-10">
            <img src={svg} alt="prev" className="w-6  h-6" />
          </button>
          <button ref={nextRef} className="absolute border border-white/50 rounded-full p-4 bg-gray-800 right-0 top-1/2 transform -translate-y-1/2 z-10 rotate-180">
            <img src={svg} alt="next" className="w-6 h-6" />
          </button>

          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50} 
            slidesPerView={1} 
            navigation={{ prevEl: prevRef.current,
               nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="mySwiper"
          >
            {sliderData.map(slide => (
              <SwiperSlide key={slide.id}>
                <div className="slide-content-container flex items-center gap-10">
                  <div className="image-circle-container ml-25">
                    <img 
                      src={slide.image} 
                      alt={slide.name} 
                      className="slide-image w-[450px] h-[400px] object-cover rounded-t-full"
                    />
                  </div>
                  <div className="text-info-box w-1/3">
                    <p className="text-4xl leading-tight text-gray-500">
                      <span className="star-name text-4xl text-white">{slide.name}</span> for
                    </p>
                    <p className="event-details text-4xl py-1 text-gray-500">
                      {slide.event} performed at <span className="text-white">{slide.location}</span>.
                    </p>
                    <p className="date-stamp mt-10 text-2xl text-gray-400">
                      📅 {slide.date}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Marquee Bottom */}
      <div className="absolute bottom-30 -right-40 -rotate-40 w-1/2 overflow-hidden rounded-lg p-0.5 bg-linear-to-r from-black via-blue-500 to-black">
        <div className="bg-black w-full py-3 whitespace-nowrap overflow-hidden rounded-md">
          <div
            className={`flex gap-6 animate-marquee`}
            style={{ animationDirection: scrollDirection }}
          >
            {[...Array(2)].map((_, idx) => (
              <div className="flex gap-6" key={idx}>
                <img src={svg} width="30" />
                <span className="text-xl font-semibold">HEADLIGHTS OF TODAY</span>
                <img src={svg} width="30" />
                <span className="text-xl font-semibold">HEADLIGHTS OF TODAY</span>
                <img src={svg} width="30" />
                <span className="text-xl font-semibold">HEADLIGHTS OF TODAY</span>
                <img src={svg} width="30" />
                <span className="text-xl font-semibold">HEADLIGHTS OF TODAY</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Recentshows;
