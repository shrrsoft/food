import { FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import Link from "next/link";

const SupportPage = () => {
  return (
    <div className="w-[80%] mx-auto flex flex-col gap-5 my-8">
      <h1 className="text-2xl font-bold mb-5 ">پشتیبانی</h1>
      <div className="flex">
        <FaPhoneAlt className="text-2xl text-inherit ltr:mr-3" />
        <span className="mr-2">تلفن پشتیبانی :</span>
        <Link href="tell:+9821">4459605 - 0912</Link>
      </div>
      <div className="flex">
        <MdAttachEmail className="text-2xl text-inherit ltr:mr-3" />
        <span className="mr-2">ایمیل پشتیبانی: </span>

        <Link href="mailto:shrrsoft@yahoo.com">support@MaaniFood.info</Link>
      </div>
    </div>
  );
};

export default SupportPage;
