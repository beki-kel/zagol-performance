import React from "react";
import logoImg from "@/images/zagol-logo-white.png";
import logoLightImg from "@/images/logo-light.png";
import LogoSvgLight from "./LogoSvgLight";
import LogoSvg from "./LogoSvg";
import Link from "next/link";
import { StaticImageData } from "next/image";
import Image from "next/image";

export interface LogoProps {
  img?: StaticImageData;
  imgLight?: StaticImageData;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoImg,
  className = "w-24",
}) => {
  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 ${className}`}
    >
      {img ? (
        <Image
          className={`block ${imgLight ? "dark:hidden" : ""}`}
          src={img}
          alt="Logo"
          width={100}
        />
      ) : (
        "Logo Here"
      )}

      {imgLight && (
        <Image
          className="hidden dark:block"
          src={imgLight}
          alt="Logo"
          width={100}
        />
      )}
    </Link>
  );
};

export default Logo;
