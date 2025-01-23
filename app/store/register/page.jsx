"use client";
import { userContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/app/components/Map"), { ssr: false });

const RegisterPage = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const {
    setUserMobileNumber,
    setPassword,
    setUserAdress,
    userAddress,
    setUserName,
  } = useContext(userContext);

  const router = useRouter();

  const schema = yup.object().shape({
    userName: yup.string().required("وارد کردن نام الزامی است"),
    password: yup
      .string()
      .required("وارد کردن رمز عبور الزامی است")
      .min(4, "رمز عبور نمی تواند کمتر از 4 حرف باشد")
      .max(15, "رمز عبور نمی تواند بیشتر از 15 حرف باشد"),
    confirmPassword: yup
      .string()
      .required("تکرار رمز عبور الزامی است")
      .oneOf([yup.ref("password")], "مقدار وارد شده با رمز عبور همخوانی ندارد"),
    mobileNumber: yup
      .string("فقط عدد مجاز است")
      .min(11, "شماره موبایل نامعتبر است")
      .max(11, "شماره موبایل نامعتبر است"),
    address: yup.string().required("وارد کردن آدرس الزامی است"),
    houseNumber: yup
      .number()
      .transform((value) => (Number.isNaN(value) ? null : value))
      .min(1, "شماره پلاک را صحیح وارد کنید")
      .required("وارد کردن پلاک الزامی است"),
    unit: yup
      .number()
      .transform((value) => (Number.isNaN(value) ? null : value))
      .min(1, "شماره واحد را صحیح وارد کنید")
      .required("وارد کردن شماره واحد الزامی است"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmitForm(data) {
    setIsCorrect(true);
    setUserMobileNumber(data.mobileNumber);
    setPassword(data.password);
    setUserName(data.userName);
    setUserAdress(`${data.address} پلاک ${data.houseNumber} واحد ${data.unit}`);
    setTimeout(() => router.replace("/store/login"), 2000);
  }
  // map config

  return (
    <>
      <div className="flex gap-10 flex-wrap justify-center items-center">
        <form
          className="my-3 flex flex-col gap-4 md:w-[15rem] w-[80%] text-center [&_p]:text-red-500"
          action=""
          onSubmit={handleSubmit(onSubmitForm)}>
          <input
            className="text-black p-1 outline-none rounded-md border text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type="text"
            placeholder="نام و نام خانوادگی "
            {...register("userName")}
          />
          {errors.userName && (
            <p className="text-black">{errors.userName?.message}</p>
          )}
          <input
            className="text-black p-1 outline-none rounded-md border text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type="number"
            placeholder="شماره موبایل"
            {...register("mobileNumber")}
          />
          {errors.mobileNumber && (
            <p className="text-black">{errors.mobileNumber?.message}</p>
          )}
          <input
            className="text-black p-1 outline-none rounded-md border text-center"
            type="password"
            placeholder="رمز عبور"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-black">{errors.password?.message}</p>
          )}
          <input
            className="text-black p-1 outline-none rounded-md border text-center"
            type="password"
            placeholder="تکرار رمز عبور"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-black">{errors.confirmPassword?.message}</p>
          )}
          <div className="md:hidden">
            <Map />
          </div>
          <textarea
            className="text-black p-1 outline-none rounded-md border text-right"
            placeholder=" آدرس"
            value={userAddress}
            {...register("address")}></textarea>
          {errors.address && (
            <p className="text-black">{errors.address?.message}</p>
          )}
          <div className="flex md:justify-between justify-center gap-4">
            <div>
              <input
                className="text-black p-1 w-20 outline-none rounded-md border text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                type="number"
                placeholder="پلاک"
                {...register("houseNumber")}
              />
              {errors.houseNumber && (
                <p className="text-black">{errors.houseNumber?.message}</p>
              )}
            </div>
            <div>
              <input
                className="text-black p-1 w-20 outline-none rounded-md border text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                type="number"
                placeholder=" واحد "
                {...register("unit")}
              />
              {errors.unit && (
                <p className="text-black">{errors.unit?.message}</p>
              )}
            </div>
          </div>
          <input
            className="bg-[#3fab46db] rounded-md mt-3 p-0.5 pb-2 mx-auto w-[5rem] text-white hover:scale-105 transition-all"
            type="submit"
            value="تایید  "
          />
        </form>
        <div className="hidden md:block">
          <Map />
        </div>
      </div>
      {isCorrect && (
        <h3 className="text-center m-4 font-bold bg-[#3fab46db] text-white p-4 w-72 mx-auto rounded-md">
          ثبت نام موفقیت آمیز بود!
        </h3>
      )}
    </>
  );
};

export default RegisterPage;
