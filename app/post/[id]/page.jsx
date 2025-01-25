"use client";

import { useParams } from "next/navigation";
import { getPostData } from "../../../data/posts";
import Image from "next/image";
import { postText } from "@/app/components/blog/BlogPost";

const SinglePostPage = () => {
  const params = useParams();
  const post = getPostData(parseInt(params.id));

  return (
    <div className="w-[85%] mx-auto mb-20">
      <h1 className="font-bold text-xl text-[#E51A21] mt-10 mb-20 md:text-right text-center leading-[3rem]">
        {post.title}
      </h1>
      <div className="">
        <Image
          width={500}
          height={200}
          src={post.imageUrl}
          alt=""
          className="mx-auto lg:float-left rounded mb-4 lg:mb-0 lg:mr-8"
        />
        <p className="text-justify leading-8">{postText}</p>
        <h3 className="font-bold text-lg  mt-16 mb-4">{post.title}</h3>
        <p className="text-justify leading-8">{postText}</p>
        <h3 className="font-bold text-lg  mt-16 mb-4">{post.title}</h3>
        <p className="text-justify leading-8">{postText}</p>
        <h3 className="font-bold text-lg  mt-16 mb-4">{post.title}</h3>
        <p className="text-justify leading-8">{postText}</p>
      </div>
    </div>
  );
};

export default SinglePostPage;
