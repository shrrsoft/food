"use client";
import Comments from "@/app/components/CommentsList";
import { getProductData } from "@/data/items";
import { useParams } from "next/navigation";

const ProductPage = () => {
  const params = useParams();
  const product = getProductData(parseInt(params.id));
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


  return (
    <div className="text-center w-[80%] mx-auto">
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
      <Comments />
    </div>
  );
};

export default ProductPage;
