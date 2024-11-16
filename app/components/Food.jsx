"use client";

import { cartContext } from "@/context/CartContext";
import Image from "next/image";
import { useContext } from "react";

const Food = ({ product }) => {
  const cart = useContext(cartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <div className="border border-slate-300/30 shadow-lg w-60 m-2 p-2 rounded-md">
      <Image
        src={product.imageUrl}
        width={300}
        height={300}
        alt="food image"
        className="mx-auto rounded-md"
      />
      <h3 className="text-center font-bold my-2 line-clamp-1">
        {product.title}
      </h3>
      <p className="text-center text-sm mb-2 line-clamp-1">{product.details}</p>
      <h3 className="text-left mt-4">{product.price} تومان</h3>
      {productQuantity > 0 ? (
        <div className="flex w-full">
          <button
            onClick={() => cart.addItemToCart(product.id)}
            className="border rounded-md w-8 h-8 pb-1.5 hover:bg-[#3fab46db]  m-4">
            +
          </button>
          <span className="my-auto pb-2">{productQuantity}</span>
          <button
            onClick={() => cart.removeItemFromCart(product.id)}
            className="border rounded-md w-8 h-8 pb-1.5 hover:bg-[#e51a21db] m-4">
            -
          </button>
        </div>
      ) : (
        <button
          onClick={() => cart.addItemToCart(product.id)}
          className="border rounded-md w-8 h-8 pb-1.5 hover:bg-[#3fab46db] m-4">
          +
        </button>
      )}
    </div>
  );
};

export default Food;
