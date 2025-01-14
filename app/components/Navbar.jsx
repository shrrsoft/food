import Link from "next/link";

const Navbar = () => {
  return (
    <div className="mt-2 border-t border-b p-2 hidden md:block">
      <ul className="flex gap-6 mr-20">
        <li>
          <Link href="/store/user-information">اطلاعات من</Link>
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
      </ul>
    </div>
  );
};

export default Navbar;
