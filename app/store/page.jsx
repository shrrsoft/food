import { GiFullPizza, GiSandwich } from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { RiDrinksFill } from "react-icons/ri";
import { productList } from "@/data/items";
import Food from "../components/Food";

const StorePage = () => {
  const categories = [
    {
      name: "پیتزا",
      icon: <GiFullPizza className="text-5xl" />,
      category: "pizza",
    },
    {
      name: "برگر",
      icon: <FaHamburger className="text-5xl" />,
      category: "burger",
    },
    {
      name: "ساندویچ",
      icon: <GiSandwich className="text-5xl" />,
      category: "sandwich",
    },
    {
      name: "پیش غذا",
      icon: <FaBowlFood className="text-5xl" />,
      category: "sides",
    },
    {
      name: "نوشیدنی",
      icon: <RiDrinksFill className="text-5xl" />,
      category: "drinks",
    },
  ];
  return (
    <>
      {categories.map((item) => (
        <div key={item.category} className="max-w-[85%] mx-auto">
          <div className="flex items-center pr-4 justify-center">
            {item.icon}
            <h1 className="font-bold text-xl mr-2 my-4">{item.name}</h1>
          </div>
          <div className="flex mx-auto flex-wrap mb-8 justify-center">
            {productList.map((product) =>
              product.category === item.category ? (
                <Food key={product.id} product={product} />
              ) : null
            )}
          </div>
          <div className="h-0.5 my-1 bg-gradient-to-r from-white/10 via-slate-300 to-white/10 mb-10"></div>
        </div>
      ))}
    </>
  );
};

export default StorePage;
