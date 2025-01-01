"use client";

import { cartContext } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { CiTrash } from "react-icons/ci";
import { FiPlus, FiMinus } from "react-icons/fi";

const Food = ({ product }) => {
  const cart = useContext(cartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <div className="border border-slate-300/30 shadow-lg w-60 m-2 rounded-md hover:scale-105 z-10 transition-all">
      <Link href={`/product/${product.id}`} className="*:hover:line-clamp-none">
        <Image
          src={product.imageUrl}
          width={300}
          height={300}
          alt="food image"
          className="mx-auto rounded-t-md"
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
            <button
              onClick={() => cart.addItemToCart(product.id)}
              className=" rounded-md w-8 h-8  hover:bg-[#3fab46db] hover:text-white font-bold">
              <FiPlus className="mx-auto" />
            </button>
            <span className="my-auto pb-1 m-4">{productQuantity}</span>
            <button
              onClick={() => cart.removeItemFromCart(product.id)}
              className=" rounded-md  w-8 h-8  hover:bg-[#e51a21db] hover:text-white font-bold">
              <FiMinus className="mx-auto" />
            </button>
          </div>
          <button
            onClick={() => cart.deleteFromCart(product.id)}
            className=" rounded-md w-8 text-2xl h-8 hover:bg-[#e51a21db] hover:text-white">
            <CiTrash className="mx-auto" />
          </button>
        </div>
      ) : (
        <button
          onClick={() => cart.addItemToCart(product.id)}
          className=" rounded-md w-8 h-8 mx-2 my-3 hover:bg-[#3fab46db] hover:text-white font-bold">
          <FiPlus className="mx-auto" />
        </button>
      )}
    </div>
  );
};

export default Food;
