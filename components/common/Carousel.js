import React from 'react'
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function CarouselComponent() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={100}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src="/assets/images/book.png" alt='img-header' className="mx-auto object-contain"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/cassette.png" alt='img-header' className="mx-auto object-contain"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/television.png" alt='img-header' className="mx-auto object-contain"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/typewriter.png" alt='img-header' className="mx-auto object-contain"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
