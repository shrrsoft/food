import { useCartContext } from "@/context/CartContext";
import { getProductData } from "@/data/items";

const CartItem = ({ id, quantity }) => {
  const product = getProductData(id);
  const cart = useCartContext();
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="border shadow-md w-[80%] mx-auto my-2">
      <div className="flex sm:flex-row flex-col items-center justify-center gap-14 p-3">
        <img src={product.imageUrl} alt="" className="w-20 rounded-md m-1" />
        <div className="w-[70%] grid sm:grid-cols-3 grid-cols-1 gap-4 text-center justify-center items-center">
          <h3>{product.title}</h3>
          <h5>{numberWithCommas(product.price)} تومان </h5>
          <div>
            <button
              onClick={() => cart.addItemToCart(product.id)}
              className="border rounded-md w-8 h-8 pb-1.5 hover:bg-[#3fab46db] hover:text-white m-1 font-bold">
              +
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              onClick={() => cart.removeItemFromCart(product.id)}
              className="border rounded-md w-8 h-8 pb-1.5 hover:bg-[#e51a21db] hover:text-white m-1 font-bold">
              -
            </button>
            <button
              onClick={() => cart.deleteFromCart(product.id)}
              className="border rounded-md w-20 text-sm h-8 pb-1.5 hover:bg-[#e51a21db] m-1 hover:text-white">
              حذف سبد
            </button>
          </div>
        </div>
        <span className="w-28 text-center"></span>
      </div>
    </div>
  );
};

export default CartItem;
