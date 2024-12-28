import Link from "next/link";
import SearchBox from "./SearchBox";

const MobileMenu = ({ isOpen, SetIsOpen, isLogin, handleLogin }) => {
  return (
    <div
      className={`bg-[#E51A21]/80 h-screen fixed z-20 right-0 top-16 overflow-hidden origin-right transition-all ease-in-out ${
        isOpen ? "w-full" : "w-0"
      }`}
      onClick={() => SetIsOpen(false)}>
      <div className="flex flex-col gap-1 items-start p-4 pr-8 text-white font-bold text-2xl ">
        <SearchBox />
        <Link href="/login" onClick={handleLogin}>
          {isLogin ? "خروج" : "ورود"}
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
