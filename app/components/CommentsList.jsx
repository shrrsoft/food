"use client";

import Comment from "./Comment";
import NewComment from "./NewComment";

const Comments = () => {
  return (
    <div className="md:mx-auto mt-20 md:w-[50%] mx-5">
      <span className="block mb-5 font-bold">دیدگاه ها</span>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <NewComment />
    </div>
  );
};

export default Comments;
