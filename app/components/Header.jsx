"use client";

import Image from "next/image";
import { LuMenu } from "react-icons/lu";
import SearchBox from "./SearchBox";
import Link from "next/link";
import { useState } from "react";
import CounterBadg from "./CounterBadg";
import Branch from "./Branch";
import { IoCartOutline, IoClose } from "react-icons/io5";
import { useCartContext } from "@/context/CartContext";

const Header = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const { isLogin, setIsLogin } = useCartContext();
  function handleLogin() {
    if (isLogin == true) {
      setIsLogin(false);
    }
  }

  return (
    <header>
      <div className="w-full border-b-2 py-0.5 mt-0 sm:px-[6rem] px-6 fixed top-0 bg-white z-20">
        <div className="flex items-center justify-between flex-wrap ] ">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-8">
              <div className="bg-[#E51A21] w-12 h-12 rounded-full flex justify-center items-center lg:hidden">
                <div
                  className={`bg-[#E51A21]/80 h-screen fixed z-20 right-0 top-16 overflow-hidden origin-right transition-all ease-in-out ${
                    isOpen ? "w-full" : "w-0"
                  }`}
                  onClick={() => SetIsOpen(false)}>
                  <div className="flex flex-col gap-1 items-center p-1 text-white "></div>
                </div>
                <div>
                  {isOpen ? (
                    <IoClose
                      className=" text-3xl"
                      onClick={() => SetIsOpen(false)}
                    />
                  ) : (
                    <LuMenu
                      className="text-3xl"
                      onClick={() => SetIsOpen(true)}
                    />
                  )}
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src="/Maani-logo.png"
                  width={50}
                  height={50}
                  alt="logo"
                  className="pb-2"
                />
              </div>
            </div>
            <Branch />
            <SearchBox />
          </div>
          <div className="flex items-center gap-2 my-4">
            <Link
              href={isLogin ? "/cart" : "/login"}
              className="flex items-center">
              <CounterBadg className="" />
              <IoCartOutline className="text-3xl -mr-1.5" />
            </Link>
            <div className="sm:flex gap-2 bg-[#E51A21] px-4 py-1 rounded-xl text-white hidden">
              <Link className="mb-1 text-sm font-bold" href="/">
                صفحه اصلی
              </Link>
              <div className="border"></div>
              <Link
                className="mb-1 text-sm font-bold"
                href="/login"
                onClick={handleLogin}>
                {isLogin ? "خروج" : "ورود"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
