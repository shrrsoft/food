"use client";

import Image from "next/image";
import { LuMenu } from "react-icons/lu";
import { SlBasket } from "react-icons/sl";
import SearchBox from "./SearchBox";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [adress, setAdress] = useState("آدرس");

  const handleAdress = (e) => {
    switch (e) {
      case "شمال":
        setAdress("ولنجک");
        break;
      case "جنوب":
        setAdress("خزانه");
        break;
      case "شرق":
        setAdress("تهرانپارس");
        break;
      case "غرب":
        setAdress("شهرک اکباتان");
        break;
      case "مرکز":
        setAdress("فردوسی");
        break;
    }
  };

  return (
    <div className="w-full border-b-2 py-0.5 px-[6rem]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-8">
            <div className="bg-[#E51A21] w-12 h-12 rounded-full flex justify-center items-center">
              <LuMenu className="text-2xl" />
            </div>
            <div className="size-20">
              <Image
                src="/Maani-logo.png"
                width={100}
                height={100}
                alt="logo"
                className="pb-2"
              />
            </div>
          </div>
          <div>
            <span>انتخاب شعبه</span>
            <select
              onChange={(e) => handleAdress(e.target.value)}
              className=" text-center outline-none ">
              <option value="شمال" className="">
                شمال
              </option>
              <option value="جنوب" className="">
                جنوب
              </option>
              <option value="شرق" className="">
                شرق
              </option>
              <option value="غرب" className="">
                غرب
              </option>
              <option value="مرکز" className="">
                مرکز
              </option>
            </select>
            <br />
            <span>{adress}</span>
          </div>
          <SearchBox />
        </div>
        <div className="flex items-center gap-2">
          <Link href="/cart">
            <SlBasket className="text-2xl text-[#E51A21]" />
          </Link>
          <div className="flex gap-2 bg-[#E51A21] px-4 py-1 rounded-xl text-white">
            <Link className="mb-1 text-sm font-bold" href="#">
              عضویت
            </Link>
            <div className="border"></div>
            <Link className="mb-1 text-sm font-bold" href="#">
              ورود به سایت
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
