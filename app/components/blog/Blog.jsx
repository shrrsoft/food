import BlogBanner from "./BlogBanner";
import BlogPageSlider from "./BlogPageSlider";

const Blog = () => {
  return (
    <>
      <BlogBanner />
      <div className="flex gap-4 flex-wrap justify-center mx-auto">
        <BlogPageSlider />
      </div>
    </>
  );
};

export default Blog;
