"use client";

import { useCartContext } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

const Food = ({ product }) => {
  const cart = useCartContext();
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <div className="border border-slate-300/30 shadow-lg w-60 m-2 rounded-md">
      <Link href={`/product/${product.id}`}>
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
        <div className="flex w-full">
          <button
            onClick={() => cart.addItemToCart(product.id)}
            className="border rounded-md w-8 h-8 pb-1.5 hover:bg-[#3fab46db] hover:text-white m-4 font-bold">
            +
          </button>
          <span className="my-auto pb-2">{productQuantity}</span>
          <button
            onClick={() => cart.removeItemFromCart(product.id)}
            className="border rounded-md w-8 h-8 pb-1.5 hover:bg-[#e51a21db] hover:text-white m-4 font-bold">
            -
          </button>
          <button
            onClick={() => cart.deleteFromCart(product.id)}
            className="border rounded-md w-20 text-sm h-8 pb-1.5 hover:bg-[#e51a21db] m-4 hover:text-white">
            حذف سبد
          </button>
        </div>
      ) : (
        <button
          onClick={() => cart.addItemToCart(product.id)}
          className="border rounded-md w-8 h-8 pb-1.5 hover:bg-[#3fab46db] m-4 hover:text-white font-bold">
          +
        </button>
      )}
    </div>
  );
};

export default Food;
