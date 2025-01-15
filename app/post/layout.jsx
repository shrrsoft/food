import Image from "next/image";
import Link from "next/link";

const BlogLayout = ({ children }) => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="border-b-4 p-4 text-white flex justify-between gap-6 items-center flex-wrap flex-col-reverse md:flex-row ">
        <div className="flex items-center justify-center md:gap-4 flex-wrap flex-col md:flex-row ">
          <Image
            src="/Maani-logo.png"
            width={50}
            height={50}
            alt="logo"
            className="pb-2"
          />
          <h1 className="md:text-2xl text-3xl font-bold text-black text-center md:text-right">
            مجموعه
            <br className="md:hidden" /> رستوران های زنجیره ای
            <br className="md:hidden" /> مانی
          </h1>
        </div>
        <div className="bg-red-600 p-1 flex rounded-full">
          <Link
            href="/store"
            className="px-3 pt-1 pb-2 rounded-3xl text-center bg-black hover:bg-black/60 transition-all">
            سفارش آنلاین
          </Link>
          <Link href="/" className="px-3 pt-1 pb-2 rounded-3xl text-center ">
            صفحه اصلی
          </Link>
        </div>
      </div>

      {children}
    </div>
  );
};

export default BlogLayout;
