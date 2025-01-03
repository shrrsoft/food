import { cartContext } from "@/context/CartContext";
import { useContext } from "react";

const CounterBadg = () => {
  const { items } = useContext(cartContext);

  let productCount = items?.reduce((sum, product) => sum + product.quantity, 0);
  return (
    <>
      {productCount > 0 ? (
        <span className="bg-[#E51A21] text-white text-sm block w-6 h-6 pt-0.5 text-center rounded-full">
          {productCount}
        </span>
      ) : (
        ""
      )}
    </>
  );
};

export default CounterBadg;
