"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

export default function ReviewScroll() {
  return (
    <div className="w-full overflow-hidden">
      <div className="max-w-full mx-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="w-full"
        >
          <SwiperSlide>
            <div className="bg-red-200 h-20">
              
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-red-200 h-20">Slide 2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-red-200 h-20">Slide 3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-red-200 h-20">Slide 4</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-red-200 h-20">Slide 5</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-red-200 h-20">Slide 6</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-red-200 h-20">Slide 7</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
