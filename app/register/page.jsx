"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const router = useRouter();

  function handleLogin(e) {
    e.preventDefault();
    if (password == repeatedPassword && password != "") {
      localStorage.setItem(
        "userAndPass",
        JSON.stringify({ mobileNumber: mobileNumber, password: password })
      );
      setIsCorrect(true);
      setIsError(false);

      setTimeout(() => router.replace("/login"), 2000);
    } else {
      setIsError(true);
    }
  }
  return (
    <div>
      <form
        className="mx-auto my-3 flex flex-col gap-4 w-[15rem]"
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
          required
          className="text-black p-1 outline-none rounded-md border text-center"
          type="password"
          name="password"
          placeholder="تکرار رمز عبور"
          onChange={(e) => setRepeatedPassword(e.target.value)}
        />
        <input
          className="bg-[#3fab46db] rounded-md mt-3 p-0.5 pb-2 mx-auto w-[5rem] text-white hover:scale-105 transition-all"
          type="submit"
          value="تایید  "
        />
      </form>
      {isError ? (
        <h3 className="text-center m-4 font-bold bg-[#E51A21] text-white p-4 w-72 mx-auto rounded-md">
          اطلاعات وارد شده صحیح نیست
        </h3>
      ) : (
        ""
      )}
      {isCorrect ? (
        <h3 className="text-center m-4 font-bold bg-[#3fab46db] text-white p-4 w-72 mx-auto rounded-md">
          ثبت نام موفقیت آمیز بود!
        </h3>
      ) : (
        ""
      )}
    </div>
  );
};

export default page;
