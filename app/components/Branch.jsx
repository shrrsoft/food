import { useState } from "react";

const Branch = () => {
  const [adress, setAdress] = useState("آدرس");

  const handleAdress = (e) => {
    switch (e) {
      case "شمال":
        setAdress("ولنجک");
        break;
      case "جنوب":
        setAdress("خزانه");
        break;
      case "شرق":
        setAdress("تهرانپارس");
        break;
      case "غرب":
        setAdress("شهرک اکباتان");
        break;
      case "مرکز":
        setAdress("فردوسی");
        break;
    }
  };

  return (
    <div className="hidden lg:block">
      <span>انتخاب شعبه</span>
      <select
        onChange={(e) => handleAdress(e.target.value)}
        className=" text-center outline-none ">
        <option value="شمال" className="">
          شمال
        </option>
        <option value="جنوب" className="">
          جنوب
        </option>
        <option value="شرق" className="">
          شرق
        </option>
        <option value="غرب" className="">
          غرب
        </option>
        <option value="مرکز" className="">
          مرکز
        </option>
      </select>
      <br />
      <span>{adress}</span>
    </div>
  );
};

export default Branch;
