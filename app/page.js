import Food from "./components/Food";
import { productList } from "@/data/items";

export default function Home() {
  return (
    <>
      <div className="flex max-w-[85%] mx-auto flex-wrap">
        {productList.map((item) => <Food key={item.id} product={item} />)}
      </div>
    </>
  );
}
