"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { postsList } from "@/data/posts";
import BlogPost from "./BlogPost";

const BlogPageSlider = () => {
  const breakpoints = {
    1: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    850: {
      slidesPerView: 3,
      spaceBetween: 40,
    },

    1150: {
      slidesPerView: 4,
      spaceBetween: 50,
    },

    1600: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  };

  return (
    <>
      <Swiper
        className="mySwiper"
        spaceBetween={50}
        slidesPerView={3}
        loop="true"
        navigation={true}
        modules={[Navigation]}
        breakpoints={breakpoints}>
        {postsList.map((post) => (
          <SwiperSlide key={post.id}>
            <BlogPost post={post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BlogPageSlider;
