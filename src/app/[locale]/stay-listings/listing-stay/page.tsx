"use client";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import commingSoon from "@/images/tg_image_1885578804.png";
import commingSoonDark from "@/images/freepik__background__66126.jpeg";
export interface ListingStayPageProps {}

const ListingStayPage: FC<ListingStayPageProps> = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000); // 2 second delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container relative flex flex-col justify-center items-center pt-5">
      <div className="flex flex-coljustify-center items-center  text-center">
        <h1 className="text-xl font-bold text-[#2995D3]">
          This page is under Development. Coming soon!
        </h1>
      </div>
      <div className="container flex justify-center items-start relative gap-10 ">
        <div className="rounded-2xl pb-5 mt-4">
          <Image src={commingSoon} alt="comming soon" className=" w-[70vh]" />
        </div>
      </div>
    </div>
  );
};

export default ListingStayPage;
