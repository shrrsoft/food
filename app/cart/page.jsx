"use client";

import Link from "next/link";
import { useCartContext } from "@/context/CartContext";
import { getProductData } from "@/data/items";
import CartItem from "../components/CartItem";

const page = () => {
  const { items } = useCartContext();
  let totalPrice = 0;
  let tax = 0;
  const deliveryCost = 20000;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  items.map((item) => {
    const product = getProductData(item.id);
    totalPrice = totalPrice + product.price * item.quantity;
  });
  tax = tax + totalPrice * 0.09;

  const mobileNumberFromLocal = JSON.parse(
    localStorage.getItem("userAndPass")
  ).mobileNumber;

  return (
    <>
      <div className="mx-auto p-4 flex flex-col gap-4 border border-2 w-[40%]">
        <h2 className="mx-auto font-bold">اطلاعات مشتری</h2>
        <h3>نام : ..................</h3>
        <h3> شماره تماس : {mobileNumberFromLocal}</h3>
        <h3> آدرس: .........................................</h3>
      </div>
      <div className=" w-[80%] mx-auto mt-8 py-4 hidden sm:block">
        {items.map((item) => (
          <div key={item.id} className="mx-auto">
            <CartItem id={item.id} quantity={item.quantity} />
          </div>
        ))}
        {totalPrice != 0 ? (
          <>
            <div className="flex justify-center mt-4">
              مجموع خرید : {numberWithCommas(totalPrice)} تومان
            </div>
            <div className="flex justify-center mt-4">
              مالیات : {numberWithCommas(tax)} تومان
            </div>
            <div className="flex justify-center mt-4">
              هزینه ارسال : {numberWithCommas(deliveryCost)} تومان
            </div>{" "}
            <div className="flex justify-center border-2 border-red-500 rounded-sm py-2 w-72 mx-auto mt-4">
              مبلغ قابل پرداخت :{" "}
              {numberWithCommas(totalPrice + tax + deliveryCost)} تومان
            </div>
            <div className="flex justify-center items-center">
              <Link
                href="#"
                className="bg-[#3fab46db] text-white p-2 rounded m-4 w-32 text-center hover:scale-105 transition-all">
                پرداخت
              </Link>
            </div>
          </>
        ) : (
          <h3 className="flex justify-center font-bold text-xl my-16 border-2 border-red-500 rounded-sm w-72 py-2 mx-auto">
            سبد خالی است!
          </h3>
        )}
      </div>
    </>
  );
};

export default page;
