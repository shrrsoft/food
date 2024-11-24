import { getProductData } from "@/data/items";

const CartItem = ({ id, quantity }) => {
  const product = getProductData(id);

  return (
    <div className="border shadow-md w-[80%] mx-auto my-2">
      <div className="flex items-center gap-14">
        <img src={product.imageUrl} alt="" className="w-20 rounded-md m-1" />
        <div className="w-[50%] grid grid-cols-3 gap-4 text-center">
          <h3>{product.title}</h3>
          <h5>{product.price}</h5>
          <span>{quantity}</span>
        </div>
        <span className="w-28 text-center">{product.price * quantity}</span>
      </div>
    </div>
  );
};

export default CartItem;
