"use client";
import Comments from "@/app/components/CommentsList";
import { getProductData } from "@/data/items";
import { Rating } from "react-simple-star-rating";
import { useParams } from "next/navigation";
import { useState } from "react";

const ProductPage = () => {
  const params = useParams();
  const product = getProductData(parseInt(params.id));
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

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
      <div className="flex flex-col border p-1 w-[90%] mx-auto">
        <span>میانگین امتیاز این محصول : 3.9</span>
        <div className="mt-4">
          <span className="ml-4">امتیاز شما:</span>
          <Rating
            onClick={handleRating}
            SVGclassName="inline"
            allowFraction="true"
            size="20"
          />
        </div>
      </div>

      <Comments />
    </div>
  );
};

export default ProductPage;
