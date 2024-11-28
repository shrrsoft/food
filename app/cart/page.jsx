"use client";

import Link from "next/link";
import { useCartContext } from "@/context/CartContext";
import { getProductData } from "@/data/items";
import CartItem from "../components/CartItem";

const page = () => {
  const { items } = useCartContext();
  let totalPrice = 0;
  let tax = 0;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  items.map((item) => {
    const product = getProductData(item.id);
    totalPrice = totalPrice + product.price * item.quantity;
  });
  tax = tax + totalPrice * 0.09;

  return (
    <>
      <div className="border w-[80%] mx-auto mt-8 py-4 hidden sm:block">
        <div className="flex items-center gap-14">
          <div className="w-20"></div>
          <div className="w-[70%] grid grid-cols-3 gap-4 text-center">
            <h3 className="mr-5">نام محصول</h3>
            <h5>قیمت واحد </h5>
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
      {totalPrice != 0 ? (
        <>
          <div className="flex justify-center mt-4">
            مجموع خرید : {numberWithCommas(totalPrice)} تومان
          </div>
          <div className="flex justify-center mt-4">
            مالیات : {numberWithCommas(tax)} تومان
          </div>
          <div className="flex justify-center border-2 border-red-500 rounded-sm py-2 w-72 mx-auto mt-4">
            مبلغ قابل پرداخت : {numberWithCommas(totalPrice + tax)} تومان
          </div>
          <div className="flex justify-center items-center">
            <Link
              href="/"
              className="bg-green-900 text-white p-2 rounded m-4 w-32 text-center hover:bg-green-600 hover:text-black">
              پرداخت
            </Link>
          </div>
        </>
      ) : (
        <h3 className="flex justify-center font-bold text-xl my-16 border-2 border-red-500 rounded-sm w-72 py-2 mx-auto">
          سبد خالی است!
        </h3>
      )}
    </>
  );
};

export default page;
