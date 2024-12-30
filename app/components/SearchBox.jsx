"use client";

import { IoIosSearch } from "react-icons/io";

const SearchBox = () => {
  return (
    <div className="border border-gray-400 rounded-xl overflow-hidden focus-within:border-[#E51A21] focus-within:border-2 transition-all ">
      <form className="flex" action="search ">
        <button className="items-center">
          <IoIosSearch className=" text-gray-400 size-6 mr-3" />
        </button>
        <input
          className="w-28 h-10 outline-none bg-transparent px-2 text-black pb-1 focus-within:w-52 transition-all duration-500"
          type="text"
          placeholder={" جست و جو "}
        />
      </form>
    </div>
  );
};

export default SearchBox;
