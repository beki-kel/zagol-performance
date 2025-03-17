import React, { FC } from "react";
import HeroSearchForm from "../(client-components)/(HeroSearchForm)/HeroSearchForm";
import HeaderForMobile from "../(client-components)/(Header)/HeaderForMobile";

export interface SectionHeroProps {
  className?: string;
}

const SectionHero: FC<SectionHeroProps> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col-reverse lg:flex-col relative ${className}`}>
      <div className="hidden relative hero-back lg:flex lg:flex-row lg:items-center lg:mx-0 h-[50vh] rounded-b-[3rem]">
        <span className="hidden sm:block h-fulll absolute inset-0 bg-[#2995D3] bg-opacity-60 transition-opacity rounded-b-[3rem]"></span>
        <div
          id="searchForm"
          className="xl:hidden sm:hidden container mt-auto lg:flex justify-center z-10 w-full"
        >
          <HeroSearchForm />
        </div>
      </div>

      <div
        id="searchForm"
        className="container xl:px-28 xl:scroll-mt-24 hidden xl:flex justify-center z-10 lg:-mt-28 w-full"
      >
        <HeroSearchForm />
      </div>
      <div className=" lg:hidden">
        <HeaderForMobile />
      </div>
    </div>
  );
};

export default SectionHero;
