"use client";

import { useCartContext } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const { isLogin, setIsLogin } = useCartContext();
  const router = useRouter();

  function handleLogin(e) {
    e.preventDefault();
    if (mobileNumber == "123" && password == "123") {
      setIsError(false);
      setIsLogin(true);
      router.replace("./");
    } else {
      setIsError(true);
      setIsLogin(false);
    }
  }
  return (
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
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <input
          required
          className="text-black p-1 outline-none rounded-md border text-center"
          type="password"
          name="password"
          placeholder="رمز عبور"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="bg-[#3fab46db] rounded-md mt-3 p-0.5 pb-2 mx-auto w-[5rem] text-white hover:scale-105 transition-all"
          type="submit"
          value="ورود "
        />
      </form>
      {isError ? (
        <h3 className="text-center m-4 font-bold bg-[#E51A21] text-white p-4 w-72 mx-auto rounded-md">
          شماره تماس یا رمز عبور صحیح نیست!
        </h3>
      ) : (
        ""
      )}
      {isLogin ? (
        <h3 className="text-center m-4 font-bold bg-[#3fab46db] text-white p-4 w-72 mx-auto rounded-md">
          خوش آمدید!
        </h3>
      ) : (
        ""
      )}
    </div>
  );
};
export default page;
