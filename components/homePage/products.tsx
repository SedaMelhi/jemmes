"use client";

import { FC, useEffect, useState } from "react";
import { Filters, Product } from "../shared";
import { MyButton } from "../shared/button";
import { ProductsService, ProductType } from "@/services/homePage";
import { Skeleton } from "../ui/skeleton";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export const Products: FC = () => {
  const [activeFilter, setActiveFilter] = useState<number>(0);
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const getProducts = async (activeFilter: number) => {
    const data = await ProductsService.getProducts(
      activeFilter === 0
        ? { bestseller: true }
        : activeFilter === 1
        ? { new: true }
        : { promotion: true },
      4
    );
    setProducts(data);
  };
  useEffect(() => {
    getProducts(activeFilter);
  }, [activeFilter]);
  return (
    <section className="lg:mt-10 mt-8 lg:px-10 px-4 pr-0 max-w-[1600px] m-auto">
      <Filters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <div className="mt-5">
        <Swiper
          spaceBetween={8}
          className="mySwiper w-full"
          breakpoints={{
            0: {
              slidesPerView: "auto",
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
          }}
        >
          {products
            ? products.map((product) => (
                <SwiperSlide
                  key={product.id}
                  className="lg:w-full sm:w-[360px!important] w-[180px!important]"
                >
                  <Product product={product} />
                </SwiperSlide>
              ))
            : [0, 1, 2, 3, 4].map((item) => (
                <SwiperSlide key={item}>
                  <div>
                    <Skeleton className="h-[520px] sm:w-[360px!important] w-[180px!important] rounded-2xl" />
                    <Skeleton className="h-[134px] sm:w-[360px!important] w-[180px!important] rounded-2xl mt-2.5 mb-3" />
                    <Skeleton className="h-[52px] sm:w-[360px!important] w-[180px!important] rounded-2xl" />
                  </div>
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
      <div className="lg:pr-0 pr-4">
        <MyButton
          value="Смотреть"
          className="w-[100%] lg:mt-12 sm:mt-8 mt-4 bg-accent text-white-100 font-medium text-xl leading-6 sm:block hidden"
        />
      </div>
    </section>
  );
};
