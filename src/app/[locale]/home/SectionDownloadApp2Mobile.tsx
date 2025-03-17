import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import ZagolApp from "@/images/zagol-app-ad.png";
import ZagolApp2 from "@/images/mobile-ad-dark.png";
import btnIosPng from "@/images/image copy.png";
import btnAndroidPng from "@/images/image.png";

const SectionDownloadApp2Mobile = () => {
  return (
    <div className="space-x-4 pt-20 flex flex-col lg:hidden">
      <div className="relative flex flex-col justify-center items-start space-y-4 w-full ">
        <h2 className="text-2xl font-semibold w-full text-center">
          Download Our App
        </h2>

        <p className="text-lg text-center">
          Get the app now on both Android and iOS for better experince on your
          mobile!
        </p>
        <div className="w-full flex justify-center items-center px-4">
          <Image src={ZagolApp} alt="Mobile App" className="dark:hidden" />
          <Image
            src={ZagolApp2}
            alt="Mobile App"
            className="hidden dark:block"
          />
        </div>
        <div className="grid grid-cols-3 w-full py-6 px-4">
          <div className="border-r-2 border-gray-200">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center">
                <p className=" text-xl text-center text-[#2995D3] font-semibold">
                  4+
                </p>
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-[#ffcc00] ml-2 h-4 w-4"
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
                className="text-[#2995D3] ml-2 h-5 w-5"
              />
              <p className="text-lg font-thin text-neutral-6000 text-center dark:text-white">
                16 MB
              </p>
            </div>
          </div>
          <div className="pl-3 flex flex-col space-y-2 items-center justify-start">
            <p className="text-xl text-center text-[#2995D3] font-semibold">
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
    </div>
  );
};

export default SectionDownloadApp2Mobile;
