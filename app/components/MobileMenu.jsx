import Link from "next/link";

const MobileMenu = ({ isOpen, SetIsOpen, isLogin, handleLogin }) => {
  return (
    <div
      className={`bg-black/60 backdrop-blur-md h-screen fixed z-20 right-0 top-16 overflow-hidden origin-right transition-all ease-in-out ${
        isOpen ? "w-full" : "w-0"
      }`}
      onClick={() => SetIsOpen(false)}>
      <div className="flex flex-col items-start p-4 pr-8 text-white text-2xl ">
        <ul className="flex flex-col gap-6">
          <li>
            <Link href={isLogin ? "/store/user-information" : "/store/login"}>
              اطلاعات من
            </Link>
          </li>
          <li>
            <Link href=""> سابقه سفارش ها</Link>
          </li>
          <li>
            <Link href=""> کیف پول</Link>
          </li>
          <li>
            <Link href="">شعبه ها </Link>
          </li>
          <li>
            <Link href="/store/support">پشتیبانی </Link>
          </li>
          <li>
            <Link href="/">صفحه اصلی </Link>
          </li>
          <li>
            <Link href="/store/login" onClick={handleLogin}>
              {isLogin ? "خروج" : "ورود"}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
