"use client";

import Image from "next/image";
import { LuMenu } from "react-icons/lu";
import SearchBox from "./SearchBox";
import Link from "next/link";
import { useContext, useState } from "react";
import CounterBadg from "./CounterBadg";
import Branch from "./Branch";
import { IoCartOutline, IoClose } from "react-icons/io5";
import MobileNavbar from "./MobileMenu";
import { IoHomeOutline } from "react-icons/io5";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";
import { userContext } from "@/context/UserContext";

const Header = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const { isLogin, setIsLogin } = useContext(userContext);
  function handleLogin() {
    if (isLogin == true) {
      setIsLogin(false);
    }
  }
  const pathname = usePathname();

  return (
    <header className="md:mb-36 mb-20">
      <div className="w-full py-0.5 mt-0 sm:px-[6rem] px-6 fixed top-0 bg-white z-20">
        <div className="flex items-center justify-between flex-wrap ] ">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-8">
              <div className="bg-[#E51A21] w-8 h-8 rounded-full flex justify-center items-center md:hidden">
                <MobileNavbar
                  isOpen={isOpen}
                  SetIsOpen={SetIsOpen}
                  isLogin={isLogin}
                  handleLogin={handleLogin}
                />
                <div>
                  {isOpen ? (
                    <IoClose
                      className=" text-2xl"
                      onClick={() => SetIsOpen(false)}
                    />
                  ) : (
                    <LuMenu
                      className="text-2xl"
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
            <div className="hidden md:flex">
              <SearchBox />
            </div>
          </div>
          <div className="flex items-center gap-2 my-4">
            <Link href="store/cart" className="flex items-center">
              <CounterBadg className="" />
              <IoCartOutline className="text-3xl -mr-1.5" />
            </Link>
            <div className="sm:flex gap-2 bg-[#E51A21] px-4 py-1 rounded-xl text-white hidden">
              <Link className="mb-1 text-sm font-bold" href="/store">
                صفحه اصلی
              </Link>
              <div className="border"></div>
              <Link
                className="mb-1 text-sm font-bold"
                href="/store/login"
                onClick={handleLogin}>
                {isLogin ? "خروج" : "ورود"}
              </Link>
            </div>
            <Link
              className="mb-1 text-sm font-bold block md:hidden"
              href="/store">
              <IoHomeOutline className="text-2xl mx-auto" />
            </Link>
          </div>
        </div>
        <Navbar />
      </div>
      {pathname == "/store" ? (
        <div className="md:hidden w-[80%] mx-auto mb-8">
          <SearchBox />
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
