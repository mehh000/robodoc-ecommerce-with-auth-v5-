"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="sm:px-28 px-0 mt-2 md:px-20 sm:mt-5">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true} // Infinite loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, Navigation]} // Autoplay with a 3-second delay
          onSlideChange={() => console.log("Slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Image
              src={"/banner_one.webp"}
              alt=""
              width={2000}
              height={10204}
              className=" rounded-lg "
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/banner_two.webp"}
              alt=""
              width={2000}
              height={10204}
              className=" rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* mini ads */}

      <div className="flex items-center gap-5 flex-wrap w-full justify-center mt-2">
        <Image src={"/mini_one.webp"} height={400} width={500} alt="" />
        <Image src={"/mini_two.webp"} height={400} width={500} alt="" />
        <Image src={"/mini_three.webp"} height={400} width={500} alt="" />
      </div>
    </>
  );
};

export default Hero;
