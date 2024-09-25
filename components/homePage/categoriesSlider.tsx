"use client";
import { CategoryType } from "@/services/homePage";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export const CategoriesSlider: FC<{ categories: CategoryType[] }> = ({
  categories,
}) => {
  return (
    <Swiper
      spaceBetween={8}
      className="mySwiper w-[full]"
      breakpoints={{
        0: {
          slidesPerView: "auto",
          spaceBetween: 8,
        },
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 10,
        },
      }}
    >
      {categories &&
        categories.map(({ id, name, image }) => (
          <SwiperSlide
            key={id}
            className="lg:w-[373px!important] sm:w-[360px!important] w-[164px!important]"
          >
            <div
              style={{
                background: `url(${image || "not.png"}) center/cover no-repeat`,
              }}
              className="sm:pb-[132%] pb-[140%] rounded-2xl bg-secondary"
            ></div>
            <h3 className="mt-3 font-medium text-xl">{name}</h3>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
