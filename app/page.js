import Food from "./components/Food";
import { productList } from "@/data/items";
import { GiFullPizza, GiSandwich } from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { RiDrinksFill } from "react-icons/ri";



export default function Home() {
  return (
    <>
      <div className="max-w-[85%] mx-auto">
        <div className="flex items-center pr-4 justify-center">
          <GiFullPizza className="text-5xl" />
          <h1 className="font-bold text-xl mr-2 my-4">پیتزا</h1>
        </div>
      <div className="flex mx-auto flex-wrap mb-8 justify-center">
        {productList.map((item) => (item.category == "pizza" ? <Food key={item.id} product={item} /> :null))}
        </div>
          <div className="h-0.5 my-1 bg-gradient-to-r from-white/10 via-slate-300 to-white/10 mb-10"></div>
      </div>

       <div className="max-w-[85%] mx-auto">
        <div className="flex items-center pr-4 justify-center">
          <FaHamburger   className="text-5xl" />
          <h1 className="font-bold text-xl mr-2 my-4">برگر</h1>
        </div>
      <div className="flex mx-auto flex-wrap mb-8 justify-center">
        {productList.map((item) => (item.category == "burger" ? <Food key={item.id} product={item} /> :null))}
        </div>
        <div className="h-0.5 my-1 bg-gradient-to-r from-white/10 via-slate-300 to-white/10 mb-10"></div>
      </div>

       <div className="max-w-[85%] mx-auto">
        <div className="flex items-center pr-4 justify-center">
          <GiSandwich  className="text-5xl" />
          <h1 className="font-bold text-xl mr-2 my-4">ساندویچ</h1>
        </div>
      <div className="flex mx-auto flex-wrap mb-8 justify-center">
        {productList.map((item) => (item.category == "sandwich" ? <Food key={item.id} product={item} /> :null))}
        </div>
          <div className="h-0.5 my-1 bg-gradient-to-r from-white/10 via-slate-300 to-white/10 mb-10"></div>
      </div>

       <div className="max-w-[85%] mx-auto">
        <div className="flex items-center pr-4 justify-center">
          <FaBowlFood   className="text-5xl" />
          <h1 className="font-bold text-xl mr-2 my-4">پیش غذا </h1>
        </div>
        <div className="flex mx-auto flex-wrap mb-8 justify-center">
        {productList.map((item) => (item.category == "sides" ? <Food key={item.id} product={item} /> :null))}
        </div>
        <div className="h-0.5 my-1 bg-gradient-to-r from-white/10 via-slate-300 to-white/10 mb-10"></div>
      </div>

       <div className="max-w-[85%] mx-auto">
        <div className="flex items-center pr-4 justify-center">
          <RiDrinksFill    className="text-5xl" />
          <h1 className="font-bold text-xl mr-2 my-4">نوشیدنی</h1>
        </div>
        <div className="flex mx-auto flex-wrap mb-8 justify-center">
        {productList.map((item) => (item.category == "drinks" ? <Food key={item.id} product={item} /> :null))}
        </div>
      </div>
    </>
  );
}
