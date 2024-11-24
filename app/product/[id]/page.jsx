"use client";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();

  return <div className="mr-60">{params.id}</div>;
};

export default Page;
