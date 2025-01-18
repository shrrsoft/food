import { userContext } from "@/context/UserContext";
import Link from "next/link";
import { useContext } from "react";

const Navbar = () => {
  const { isLogin } = useContext(userContext);
  return (
    <div className="mt-2 border-t border-b p-2 hidden md:block">
      <ul className="flex gap-6 mr-20">
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
          <Link href="">پشتیبانی </Link>
        </li>
        <li>
          <Link href="/">صفحه اصلی </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
