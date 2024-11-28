import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-gray-800 p-4">
        <div className="max-w-[85%] mx-auto">
          <div className="bg-white w-32 mx-auto rounded-sm">
            <Image
              src="/Maani-logo.png"
              width={100}
              height={0}
              alt="logo"
              className="pb-2 mx-auto"
            />
          </div>
          <div className="flex md:flex-row md:justify-between flex-col text-center justify-center text-white mt-4 *:mb-3 ">
            <p>فست فود زنجیره ای مانی</p>
            <p>دفتر مرکزی : تهران، خیابان پیروزی پلاک 256 </p>
            <p>تلفن : 12345678 - 021</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row justify-center text-center gap-4 md:justify-between py-4 px-[7%] text-white bg-gray-900">
          <h4 className="block">طراحی و پیاده سازی شده توسط سیدحمیدرضا رضوی</h4>
          <h4>Copyright © 2024 Seyed Hamidreza Razavi. All Rights Reserved</h4>
        </div>
      </div>
    </>
  );
};

export default Footer;
