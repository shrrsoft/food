import BlogBanner from "./BlogBanner";
import BlogPost from "./BlogPost";
import { postsList } from "@/data/posts";


const Blog = () => {
  return (
    <>
      <BlogBanner />
      <div
        className="flex gap-4 flex-wrap justify-center">
        {postsList.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default Blog;
