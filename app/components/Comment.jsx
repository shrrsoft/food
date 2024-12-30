"use client";
import { BiLike, BiDislike } from "react-icons/bi";
import { MdQuestionAnswer } from "react-icons/md";
import { useState } from "react";

const Comment = () => {
  const [like, setLike] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const handleLike = () => {
    if (isLike === true) {
      setLike(like - 1);
      setIsLike(false);
    } else {
      setLike(like + 1);
      setIsLike(true);
      if (isDisLike === true) {
        setDisLike(disLike - 1);
        setIsDisLike(false);
      }
    }
  };
  const [disLike, setDisLike] = useState(0);
  const [isDisLike, setIsDisLike] = useState(false);
  const handleDisLike = () => {
    if (isDisLike === true) {
      setDisLike(disLike - 1);
      setIsDisLike(false);
    } else {
      setDisLike(disLike + 1);
      setIsDisLike(true);
      if (isLike === true) {
        setLike(like - 1);
        setIsLike(false);
      }
    }
  };
  return (
    <div className="border rounded-md p-4 my-5">
      <div className="flex justify-between mb-4">
        <span className="text-sm">نام کاربری گفت</span>
        <span className="text-xs">تاریخ و ساعت ثبت دیدگاه</span>
      </div>
      <div className="flex">
        <p className="text-sm text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>
      </div>
      <div className="flex mt-2 gap-1 flex-row-reverse items-baseline">
        <BiLike
          onClick={handleLike}
          className={`"text-lg" ${isLike === true ? "text-green-600" : ""}`}
        />
        {like}
        <BiDislike
          onClick={handleDisLike}
          className={`"ml-4 ltr:ml-0 ltr:mr-4 text-lg" ${
            isDisLike === true ? "text-rose-600" : ""
          }`}
        />
        {disLike}
        <MdQuestionAnswer className="ml-4 ltr:ml-0 ltr:mr-4" />0
      </div>
    </div>
  );
};

export default Comment;
