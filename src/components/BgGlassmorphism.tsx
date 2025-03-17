import React, { FC } from "react";

export interface BgGlassmorphismProps {
  className?: string;
}

const BgGlassmorphism: FC<BgGlassmorphismProps> = ({
  className = "absolute inset-x-0 md:top-10 xl:top-40 min-h-0 pl-20 py-24 flex overflow-hidden z-0",
}) => {
  return (
    <div
      className={`nc-BgGlassmorphism ${className} ml-40 -mt-28`}
      data-nc-id="BgGlassmorphism"
    >
      <span className="block bg-[#2995D3] w-72 h-72 -mt-10 rounded-full mix-blend-multiply filter blur-2xl opacity-10 lg:w-96 lg:h-96"></span>
      <span className="block bg-[#04696d] w-72 h-72 -ml-10  rounded-full mix-blend-multiply filter blur-2xl opacity-10 lg:w-96 lg:h-96 nc-animation-delay-2000"></span>
    </div>
  );
};

export default BgGlassmorphism;
