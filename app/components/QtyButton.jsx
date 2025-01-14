import { FiPlus, FiMinus } from "react-icons/fi";
import { CiTrash } from "react-icons/ci";
import { cartContext } from "@/context/CartContext";
import { useContext } from "react";

const QtyButton = ({ variant, product }) => {
  const cart = useContext(cartContext);

  let className = "";
  let fontIcon = <></>;
  let handleClick;

  switch (variant) {
    case "add":
      className = "hover:bg-[#3fab46db]";
      fontIcon = <FiPlus className="mx-auto" />;
      handleClick = () => cart.addItemToCart(product.id);
      break;
    case "remove":
      className = "hover:bg-[#e51a21db]";
      fontIcon = <FiMinus className="mx-auto" />;
      handleClick = () => cart.removeItemFromCart(product.id);
      break;
    case "delete":
      className = "hover:bg-[#e51a21db] text-2xl";
      fontIcon = <CiTrash className="mx-auto" />;
      handleClick = () => cart.deleteFromCart(product.id);
      break;
  }
  return (
    <button
      className={`rounded-md w-8 h-8 font-bold hover:text-white ${className}`}
      onClick={handleClick}>
      {fontIcon}
    </button>
  );
};

export default QtyButton;
