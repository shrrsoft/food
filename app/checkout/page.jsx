"use client";

import Link from "next/link";
import { useCartContext } from "@/context/CartContext";
import { getProductData } from "@/data/items";
import CartItem from "../components/CartItem";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { TbPaperBag } from "react-icons/tb";
import { useState } from "react";
import UserInformation from "../components/UserInformation";

const CheckoutPage = () => {
  const [delivery, setDelivery] = useState(true);
  const { items } = useCartContext();
  let totalPrice = 0;
  let tax = 0;
  const deliveryCost = delivery ? 20000 : 0;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  items.map((item) => {
    const product = getProductData(item.id);
    totalPrice = totalPrice + product.price * item.quantity;
  });
  tax = tax + totalPrice * 0.09;

  // const mobileNumberFromLocal = JSON.parse(
  //   localStorage.getItem("userAndPass")
  // ).mobileNumber;
  return (
    <>
      <UserInformation />
      <div className="mt-10 flex gap-4 justify-center">
        <div
          className={`border-4 w-36 h-32 rounded-lg p-4 flex flex-col justify-center items-center gap-4 ${
            delivery ? "border-[#E51A21]" : ""
          }`}
          onClick={() => setDelivery(true)}>
          <MdOutlineDeliveryDining className="text-9xl" />
          ارسال با پیک
        </div>
        <div
          className={`border-4 w-36 h-32 rounded-lg p-4 flex flex-col justify-center items-center gap-4 ${
            delivery ? "" : "border-[#E51A21]"
          }`}
          onClick={() => setDelivery(false)}>
          <TbPaperBag className="text-9xl" />
          تحویل حضوری
        </div>
      </div>
      <div className=" md:w-[80%] mx-auto mt-8 py-4 sm:block">
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
            </div>
            <div className="flex justify-center border-2 border-[#E51A21] rounded-sm   py-2 w-72 mx-auto mt-4">
              مبلغ قابل پرداخت :
              {numberWithCommas(totalPrice + tax + deliveryCost)} تومان
            </div>
            <div className="flex justify-center items-center">
              <Link
                href="/payment-gateway"
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

export default CheckoutPage;
