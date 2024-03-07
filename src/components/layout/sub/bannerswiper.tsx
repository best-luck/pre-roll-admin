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

interface SwiperProps {
  banners: BannerType[]
}

export default function BannerSwiper({ banners }: SwiperProps) {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {
        banners.map((banner: BannerType, index: number) => (
          <SwiperSlide
            key={`product-slider-${banner.id}`}
          >
            <div className="w-full h-[300px] rounded-[20px] flex justify-center items-center flex-col" style={{backgroundImage: `url('${banner.image}')`}}>
              <h2 className="text-white text-3xl text-center mt-5">{banner.heading}</h2>
              <h3 className="text-white text-2xl text-center mt-5">{banner.subheading}</h3>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}