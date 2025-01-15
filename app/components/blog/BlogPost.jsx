import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogPost = ({ post }) => {
  return (
    <div
      className="border h-[30rem] border-slate-300/30 shadow-lg md:w-96 w-60 m-8 rounded-md hover:scale-105 z-10 transition-all overflow-hidden"
      data-aos="zoom-in-up"
      data-aos-delay="200"
      data-aos-once="true">
      <Link href={`/post/1`} className="*:hover:line-clamp-none">
        <Image
          src={post.imageUrl}
          width={400}
          height={300}
          alt="post image"
          className="mx-auto"
        />
        <h3 className="text-center font-bold my-2 line-clamp-1">
          {post.title}
        </h3>
        <p className="text-center text-sm mb-2 line-clamp-2 px-2">
          {post.details}
        </p>
        <h3 className="text-left mt-4 px-3">بیشتر بخوانید</h3>
      </Link>
    </div>
  );
};

export default BlogPost;
