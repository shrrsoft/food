"use client";

import Link from "next/link";
import { cartContext } from "@/context/CartContext";
import { getProductData } from "@/data/items";
import CartItem from "../components/CartItem";
import { userContext } from "@/context/UserContext";
import { useContext } from "react";

const CartPage = () => {
  const { items } = useContext(cartContext);
  let totalPrice = 0;
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  items.map((item) => {
    const product = getProductData(item.id);
    totalPrice = totalPrice + product.price * item.quantity;
  });

  const { isLogin, setIsLogin } = useContext(userContext);

  return (
    <>
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
            <div className="flex justify-center items-center">
              <Link
                href={isLogin ? "/checkout" : "/login"}
                className="bg-[#3fab46db] text-white p-2 rounded m-4 w-32 text-center hover:scale-105 transition-all mt-10">
                تکمیل سفارش
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

export default CartPage;
