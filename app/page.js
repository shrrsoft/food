import Food from "./components/Food";
import Navbar from "./components/Navbar";
import { CartProvider } from "@/context/CartContext";
import { productList } from "@/data/items";

export default function Home() {
  return (
    <CartProvider>
    <div>
        <Navbar />
        <div className="flex max-w-[85%] mx-auto flex-wrap">
          {productList.map((item) => <Food key={item.id} product={item} />)
          }
      </div>
      </div>
    </CartProvider>
  );
}
