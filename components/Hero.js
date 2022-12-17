import React from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { SliderData } from "../public/data/SliderData";
import HeroBanner from "./HeroBanner";

function Hero() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        // autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        loop={true}
        //   spaceBetween={5}
      >
        {SliderData.map((item) => (
          <SwiperSlide>
            <HeroBanner id={item.id} image={item.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero;
