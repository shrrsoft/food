"use client";

import { userContext } from "@/context/UserContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useRef, useState } from "react";

const LoginPage = () => {
  const inputPassword = useRef("");
  const mobileNumber = useRef("");
  const [isError, setIsError] = useState(false);
  const { isLogin, setIsLogin } = useContext(userContext);
  const router = useRouter();
  const { userMobileNumber, password } = useContext(userContext);

  function handleLogin(e) {
    e.preventDefault();
    if (
      mobileNumber.current == userMobileNumber &&
      inputPassword.current == password
    ) {
      setIsError(false);
      setIsLogin(true);
      router.replace("/store/cart");
    } else {
      setIsError(true);
      setIsLogin(false);
    }
  }

  function loadHomePage() {
    setTimeout(() => router.replace("/store"), 0);
  }

  return (
    <>
      {isLogin ? (
        loadHomePage()
      ) : (
        <div className="container my-10">
          <form
            className="mx-auto mt-3 flex flex-col gap-4 w-[15rem]"
            action=""
            onSubmit={handleLogin}>
            <input
              required
              className="text-black p-1 outline-none rounded-md border text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              type="number"
              name="mobileNumber"
              placeholder="شماره موبایل"
              onChange={(e) => (mobileNumber.current = e.target.value)}
            />
            <input
              required
              className="text-black p-1 outline-none rounded-md border text-center"
              type="password"
              name="password"
              placeholder="رمز عبور"
              onChange={(e) => (inputPassword.current = e.target.value)}
            />
            <div className="flex">
              <input
                className="bg-green-600 rounded-md mt-3 p-0.5 pb-2 mx-auto w-[5rem] text-white hover:scale-105 transition-all"
                type="submit"
                value="ورود "
              />
              <Link
                href="/store/register"
                className="bg-sky-600 rounded-md mt-3 p-0.5 pb-2 mx-auto w-[5rem] text-center text-white hover:scale-105 transition-all">
                عضویت
              </Link>
            </div>
          </form>
          <Link
            href=""
            className="text-xs font-bold flex justify-center hover:text-blue-800 mt-2">
            فراموشی رمز عبور
          </Link>
          <p className="text-center mt-3 text-xs bg-yellow-200 p-4 w-60 mx-auto">
            به صورت آزمایشی نام کاربری و رمز عبور در localeStorage ذخیره می شود
          </p>
          {isError && (
            <h3 className="text-center m-4 font-bold bg-[#E51A21] text-white p-4 w-72 mx-auto rounded-md">
              شماره تماس یا رمز عبور صحیح نیست!
            </h3>
          )}
          {isLogin && (
            <h3 className="text-center m-4 font-bold bg-[#3fab46db] text-white p-4 w-72 mx-auto rounded-md">
              خوش آمدید!
            </h3>
          )}
        </div>
      )}
    </>
  );
};
export default LoginPage;
