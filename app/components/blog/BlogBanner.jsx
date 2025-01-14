import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineDeliveryDining } from "react-icons/md";

const BlogBanner = () => {
  return (
    <div className="h-full bg-gradient-to-br from-orange-600 to-orange-500">
      <div className="flex md:items-start md:justify-between items-center justify-center px-16 pt-10 flex-wrap">
        <div className="text-white mx-auto">
          <h1 className="md:text-5xl text-3xl text-center font-bold mb-10">
            مجموعه
            <br className="md:hidden" /> رستوران های زنجیره ای{" "}
            <br className="md:hidden" /> مانی
          </h1>
          <h2 className="md:text-3xl text-xl md:mb-28 mb-16 text-center">
            با بیش از 10 سال سابقه
          </h2>
          <img
            src="/images/fast-food-board-with-hamburger-french-fries-isolated-on-transparent-background-free-png.webp"
            alt=""
            className="md:w-[40rem] drop-shadow-[-20px_-10px_5px_rgba(0,0,0,0.25)] md:hidden"
          />
          <Link
            href="/store"
            className=" px-4 pb-3 pt-2 rounded-3xl block w-44 text-center mx-auto bg-black/60 hover:bg-black transition-all">
            سفارش آنلاین
          </Link>
          <div className="flex items-center gap-6 justify-center mt-10">
            <p className="text-4xl pb-2">09124459605</p>
            <FaPhone className="text-4xl drop-shadow-2xl" />
          </div>
          <div className="flex md:gap-28 gap-10 flex-col md:flex-row justify-center items-center flex-wrap my-10">
            <div className="flex flex-col items-center justify-center md:drop-shadow-[-20px_-10px_5px_rgba(0,0,0,0.25)]">
              <MdOutlineDeliveryDining className="text-9xl -m-4" />
              <span className="text-2xl">ارسال سریع</span>
            </div>
            <div className="flex flex-col items-center justify-center md:drop-shadow-[-20px_-10px_5px_rgba(0,0,0,0.25)]">
              <MdOutlineDeliveryDining className="text-9xl -m-4" />
              <span className="text-2xl">ارسال سریع</span>
            </div>
            <div className="flex flex-col items-center justify-center md:drop-shadow-[-20px_-10px_5px_rgba(0,0,0,0.25)] ">
              <MdOutlineDeliveryDining className="text-9xl -m-4 " />
              <span className="text-2xl">ارسال سریع</span>
            </div>
          </div>
        </div>
        <img
          src="/images/fast-food-board-with-hamburger-french-fries-isolated-on-transparent-background-free-png.png"
          alt=""
          className="md:w-[40rem] drop-shadow-[-70px_20px_10px_rgba(0,0,0,0.5)] hidden md:block"
        />
      </div>
    </div>
  );
};

export default BlogBanner;
