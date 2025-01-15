import { cartContext } from "@/context/CartContext";
import { getProductData } from "@/data/items";
import Image from "next/image";
import { useContext } from "react";
import { CiTrash } from "react-icons/ci";
import { FiPlus, FiMinus } from "react-icons/fi";

const CartItem = ({ id, quantity }) => {
  const product = getProductData(id);
  const cart = useContext(cartContext);
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="border shadow-md w-[80%] mx-auto my-2">
      <div className="flex sm:flex-row flex-col items-center justify-around p-2">
        <Image
          width={100}
          height={100}
          src={product.imageUrl}
          alt=""
          className="rounded-md m-1"
        />
        <div className="w-[70%] grid sm:grid-cols-3 grid-cols-1 gap-4 text-center justify-center items-center">
          <h3>{product.title}</h3>
          <h5>{numberWithCommas(product.price)} تومان </h5>
          <div className="flex justify-center">
            <button
              onClick={() => cart.addItemToCart(product.id)}
              className=" rounded-md w-8 h-8  hover:bg-[#3fab46db] hover:text-white font-bold">
              <FiPlus className="mx-auto" />
            </button>
            <span className="my-auto pb-1 m-4">{quantity}</span>
            <button
              onClick={() => cart.removeItemFromCart(product.id)}
              className=" rounded-md  w-8 h-8  hover:bg-[#e51a21db] hover:text-white font-bold">
              <FiMinus className="mx-auto" />
            </button>
            <button
              onClick={() => cart.deleteFromCart(product.id)}
              className=" rounded-md w-8 text-2xl h-8 hover:bg-[#e51a21db] hover:text-white">
              <CiTrash className="mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
