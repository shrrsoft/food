"use client";

import { cartContext } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import Button from "./QtyButton";

const Food = ({ product }) => {
  const cart = useContext(cartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <div className="border border-slate-300/30 shadow-lg w-60 m-2 rounded-md hover:scale-105 z-10 transition-all duration-500 overflow-hidden">
      <Link
        href={`/store/product/${product.id}`}
        className="*:hover:line-clamp-none">
        <Image
          src={product.imageUrl}
          width={300}
          height={300}
          alt="food image"
          className="mx-auto"
        />
        <h3 className="text-center font-bold my-2 line-clamp-1">
          {product.title}
        </h3>
        <p className="text-center text-sm mb-2 line-clamp-2 px-2">
          {product.details}
        </p>
        <h3 className="text-left mt-4 px-3">{product.price} تومان</h3>
      </Link>
      {productQuantity > 0 ? (
        <div className="flex w-full justify-between px-2 my-3 bg-gray-300">
          <div className="flex">
            <Button product={product} variant="add" />
            <span className="my-auto pb-1 m-4">{productQuantity}</span>
            <Button product={product} variant="remove" />
          </div>
          <Button product={product} variant="delete" />
        </div>
      ) : (
        <div className="px-2 my-3">
          <Button product={product} variant="add" />
        </div>
      )}
    </div>
  );
};

export default Food;
