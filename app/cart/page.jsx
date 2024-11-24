"use client";

import Link from "next/link";
import { useCartContext } from "@/context/CartContext";
import CartItem from "../components/cartItem";

const page = () => {
  const { items } = useCartContext();

  return (
    <>
      <div className="border w-[80%] mx-auto mt-8 py-4 ">
        <div className="flex items-center gap-14">
          <div className="w-20"></div>
          <div className="w-[50%] grid grid-cols-3 gap-4 text-center">
            <h3 className="mr-5">نام محصول</h3>
            <h5>قیمت </h5>
            <span>تعداد </span>
          </div>
          <span>مجموع قیمت </span>
        </div>
      </div>

      {items.map((item) => (
        <div key={item.id} className="mx-auto">
          <CartItem id={item.id} quantity={item.quantity} />
        </div>
      ))}
      <div className="flex justify-center">مبلغ قابل پرداخت : {}</div>
      <div className="flex justify-center items-center">
        <Link href="/" className="bg-green-600 p-2 rounded m-4">
          پرداخت
        </Link>
        <Link href="/" className="bg-red-600 p-2 rounded m-4">
          برگشت
        </Link>
      </div>
    </>
  );
};

export default page;
