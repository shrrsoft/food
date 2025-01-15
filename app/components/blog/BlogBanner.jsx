"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { RiDiscountPercentLine, RiMentalHealthLine } from "react-icons/ri";

const BlogBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 10,
      easing: "ease-in-cubic",
      once: true,
    });
  }, []);
  return (
    <div className="bg-gradient-to-br from-[#E51A21] to-[#E51A21]/70">
      <div className="flex  items-center justify-center md:px-16 px-4 md:pt-10 pt-4 flex-wrap">
        <div className="text-white mx-auto">
          <h1
            className="md:text-5xl text-3xl text-center font-bold mb-10"
            data-aos="fade-up"
            data-aos-delay="800">
            مجموعه
            <br className="md:hidden" /> رستوران های زنجیره ای
            <br className="md:hidden" /> مانی
          </h1>
          <h2
            className="md:text-3xl text-xl md:mb-28 mb-16 text-center"
            data-aos="fade-up"
            data-aos-delay="1000">
            با بیش از 10 سال سابقه
          </h2>
          <Image
            width={250}
            height={100}
            src="/images/fast-food-board-with-hamburger-french-fries-isolated-on-transparent-background-free-png.webp"
            alt=""
            className="drop-shadow-[-20px_-10px_5px_rgba(0,0,0,0.25)] lg:hidden mx-auto"
            data-aos="zoom-in-up"
          />
          <Link
            href="/store"
            className=" px-4 pb-3 pt-2 rounded-3xl block w-44 text-center mx-auto bg-black/60 hover:bg-black transition-all"
            data-aos="fade-right"
            data-aos-delay="1600">
            سفارش آنلاین
          </Link>
          <div
            className="flex items-center gap-6 justify-center mt-10"
            data-aos="fade-left"
            data-aos-delay="1600">
            <p className="text-4xl pb-2">09124459605</p>
            <FaPhone className="text-4xl drop-shadow-2xl" />
          </div>
          <div className="flex md:gap-28 gap-8 justify-center items-center flex-wrap my-10 pb-3">
            <div
              className="flex flex-col items-center justify-center md:drop-shadow-[-20px_-10px_5px_rgba(0,0,0,0.25)]"
              data-aos="fade-down"
              data-aos-delay="900">
              <MdOutlineDeliveryDining className="md:text-9xl text-5xl md:-m-4" />
              <span className="text-lg">ارسال سریع</span>
            </div>
            <div
              className="flex flex-col items-center justify-center md:drop-shadow-[-20px_-10px_5px_rgba(0,0,0,0.25)]"
              data-aos="fade-down"
              data-aos-delay="1100">
              <RiDiscountPercentLine className="md:text-8xl text-5xl" />
              <span className="text-lg">تضمین کیفیت </span>
            </div>
            <div
              className="flex flex-col items-center justify-center md:drop-shadow-[-20px_-10px_5px_rgba(0,0,0,0.25)] "
              data-aos="fade-down"
              data-aos-delay="1300">
              <RiMentalHealthLine className="md:text-8xl text-5xl" />
              <span className="text-lg">حامی سلامتی </span>
            </div>
          </div>
        </div>
        <Image
          width={200}
          height={200}
          src="/images/fast-food-board-with-hamburger-french-fries-isolated-on-transparent-background-free-png.png"
          alt=""
          className="w-[40rem] drop-shadow-[-70px_20px_10px_rgba(0,0,0,0.5)] hidden lg:block"
          data-aos="zoom-in-up"
        />
      </div>
    </div>
  );
};

export default BlogBanner;
