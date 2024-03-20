"use client";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "@src/styles/swiper/swiper.min.css";
import "@src/styles/swiper/navigation.min.css";
import "@src/styles/swiper/scrollbar.min.css";
import "@src/styles/swiper/pagination.min.css";
import Image from "next/image";
import { BannerType } from '@src/lib/database/banners';
import "./style.scss";
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface SwiperProps {
  banners: BannerType[]
}

export default function BannerSwiper({ banners }: SwiperProps) {

  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <>
    <div ref={navigationPrevRef} className="h-full top-0 absolute flex items-center z-10 prev-nav">
      <div className="drop-shadow-lg rounded-full flex justify-center items-center cursor-pointer bg-gray-200 text-xl w-[50px] h-[50px] font-extrabold">
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    </div>
    <div ref={navigationNextRef} className="h-full top-0 absolute flex items-center z-10 next-nav">
      <div className="drop-shadow-lg rounded-full flex justify-center items-center cursor-pointer bg-gray-200 text-xl w-[50px] h-[50px] font-extrabold">
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      onBeforeInit={(swiper: any) => {
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        swiper.params.navigation.nextEl = navigationNextRef.current;
      }}
    >
      {
        banners.map((banner: BannerType, index: number) => (
          <SwiperSlide
            key={`product-slider-${banner.id}`}
          >
            <div className="w-full h-[300px] rounded-[20px] flex justify-center items-center flex-col bg-cover bg-no-repeat" style={{backgroundImage: `url('${banner.image}')`}}>
              <h2 className="text-white text-3xl text-center mt-5">{banner.heading}</h2>
              <h3 className="text-white text-2xl text-center mt-5">{banner.subheading}</h3>
            </div>
          </SwiperSlide>
        ))
      }
      
    </Swiper>
    </>
  );
}