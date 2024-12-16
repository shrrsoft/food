"use client";
import { getProductData } from "@/data/items";
import Link from "next/link";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const product = getProductData(parseInt(params.id));
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="text-center">
      <h3 className="font-bold text-2xl mb-5">{product.title}</h3>
      <h3 className="font-bold mb-5">
        {numberWithCommas(product.price)} تومان
      </h3>
      <img
        className="mx-auto rounded-md mb-6"
        src={product.imageUrl}
        alt={product.title}
      />
      <p className="text-xl mb-10">{product.details}</p>
      <Link
        href="/"
        className="bg-[#264aa6db] text-white p-2 block w-64 mx-auto rounded-md mb-4">
        برگشت به صفحه ی اصلی
      </Link>
    </div>
  );
};

export default Page;
