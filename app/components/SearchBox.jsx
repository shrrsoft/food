"use client";

import { IoIosSearch } from "react-icons/io";

const SearchBox = () => {
  return (
    <div className="border border-gray-400 lg:flex rounded-xl overflow-hidden focus-within:bg-black/20 transition-all hidden ">
      <form className="flex" action="search ">
        <button className="items-center">
          <IoIosSearch className=" text-gray-400 size-6 mr-3" />
        </button>
        <input
          className="w-52 h-10 outline-none bg-transparent px-2 text-black pb-1"
          type="text"
          placeholder={"نام غذا را جست و جو کنید ..."}
        />
      </form>
    </div>
  );
};

export default SearchBox;
