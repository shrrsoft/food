"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { productList } from "@/data/items";
import { GiFullPizza, GiSandwich } from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { RiDrinksFill } from "react-icons/ri";
import Food from "./Food";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const HomepageSlider = () => {
  const categories = [
    {
      name: "پیتزا",
      icon: <GiFullPizza className="text-5xl" />,
      category: "pizza",
    },
    {
      name: "برگر",
      icon: <FaHamburger className="text-5xl" />,
      category: "burger",
    },
    {
      name: "ساندویچ",
      icon: <GiSandwich className="text-5xl" />,
      category: "sandwich",
    },
    {
      name: "پیش غذا",
      icon: <FaBowlFood className="text-5xl" />,
      category: "sides",
    },
    {
      name: "نوشیدنی",
      icon: <RiDrinksFill className="text-5xl" />,
      category: "drinks",
    },
  ];

  const breakpoints = {
    1: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    850: {
      slidesPerView: 3,
      spaceBetween: 40,
    },

    1150: {
      slidesPerView: 4,
      spaceBetween: 50,
    },

    1600: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  };

  return (
    <>
      {categories.map((item) => (
        <div key={item.category} className=" mx-auto">
          <div className="flex items-center pr-4 justify-center">
            {item.icon}
            <h1 className="font-bold text-xl mr-2 my-4">{item.name}</h1>
          </div>
          <div className="flex mx-auto flex-wrap mb-8 justify-center">
            <Swiper
              className="mySwiper"
              spaceBetween={50}
              slidesPerView={3}
              loop="true"
              navigation={true}
              modules={[Navigation]}
              breakpoints={breakpoints}>
              {productList.map(
                (product) =>
                  product.category === item.category && (
                    <SwiperSlide key={product.id}>
                      <Food product={product} />
                    </SwiperSlide>
                  )
              )}
            </Swiper>
          </div>
          <div className="h-0.5 my-1 bg-gradient-to-r from-white/10 via-slate-300 to-white/10 mb-10"></div>
        </div>
      ))}
    </>
  );
};

export default HomepageSlider;
