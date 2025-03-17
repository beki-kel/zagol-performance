"use client";
import BackgroundSection from "@/components/BackgroundSection";
import React from "react";
import appSvg1 from "@/images/appSvg1.png";
import appSvg2 from "@/images/appSvg2.png";
import appRightImgTree from "@/images/appRightImgTree.png";
import dowloadAppBGPng from "@/images/dowloadAppBG.png";
import appRightImg from "@/images/appRightImg.png";
import btnIosPng from "@/images/image copy.png";
import btnAndroidPng from "@/images/image.png";
import MobileApp from "@/images/Untitled design.png";
import Image from "next/image";
import ZagolApp from "@/images/zagol-app-ad.png";
import ZagolApp2 from "@/images/mobile-ad-dark.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faStar } from "@fortawesome/free-solid-svg-icons";

const SectionDowloadApp = () => {
  return (
    <div className="space-x-4 py-10 hidden lg:flex">
      <div className="relative flex flex-col justify-center items-start space-y-4 w-1/2 ">
        <h2 className="text-2xl font-semibold w-full text-center">
          Download Our App
        </h2>

        <p className="text-lg text-center">
          Get the app now on both Android and iOS! Click the buttons below to
          download.
        </p>
        <div className="grid grid-cols-3 w-full py-6">
          <div className="border-r-2 border-gray-200">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center">
                <p className=" text-3xl text-center text-[#2995D3] font-semibold">
                  4+
                </p>
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-[#ffcc00] ml-2 h-7 w-7"
                />
              </div>
              <div>
                <p className=" text-lg font-thin text-neutral-6000 dark:text-white">
                  Rating
                </p>
              </div>
            </div>
          </div>
          <div className="border-r-2 border-gray-200 ">
            <div className="flex flex-col space-y-2 items-center justify-start">
              <FontAwesomeIcon
                icon={faDownload}
                className="text-[#2995D3] ml-2 h-7 w-7"
              />
              <p className="text-lg font-thin text-neutral-6000 text-center dark:text-white">
                16 MB
              </p>
            </div>
          </div>
          <div className="">
            <p className="text-3xl text-center text-[#2995D3] font-semibold">
              10K+
            </p>
            <p className="text-lg font-thin text-neutral-6000 text-center dark:text-white">
              Downloads
            </p>
          </div>
        </div>

        <div className="flex space-x-4 justify-center w-full">
          <Link
            href="https://play.google.com/store/apps/details?id=com.example.app"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-1/3"
          >
            <Image src={btnAndroidPng} alt="Google Play Store" />
          </Link>
          <Link
            href="https://apps.apple.com/us/app/example-app/id123456789"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-1/3"
          >
            <Image src={btnIosPng} alt="App Store" />
          </Link>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center px-4">
        <Image src={ZagolApp} alt="Mobile App" className="dark:hidden" />
        <Image src={ZagolApp2} alt="Mobile App" className="hidden dark:block" />
      </div>
    </div>
  );
};

export default SectionDowloadApp;
