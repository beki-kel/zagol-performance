"use client";
import Logo from "@/shared/Logo";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import ZagolBlueLogo from "@/images/zagol.png";
import Zagol from "@/images/zagol-logo-white.png";
import HotelComingSoon from "@/images/tg_image_1885578804.png";
import carComingSoon from "@/images/car_booking_coming_soon.png";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import HeroSearchForm2Mobile from "../(HeroSearchForm2Mobile)/HeroSearchForm2Mobile";
import MenuBar from "@/shared/MenuBar";
import FlightSearchForm from "../(HeroSearchForm2Mobile)/(flight-search-form)/FlightSearchForm";

const HeaderForMobile = () => {
  const [showHeroSearchModal, setShowHeroSearchModal] = useState(false);
  const [activeTab, setActiveTab] = useState("Flights");
  const Tabs = ["Flights", "Hotels", "Cars"];

  const renderSearchForm = () => {
    switch (activeTab) {
      case "Flights":
        return <FlightSearchForm />;
      case "Hotels":
        return (
          <div className="w-full px-4 mt-2 flex flex-col justify-center items-center">
            <p className="text-base text-center font-medium mb-2 text-[#036299]">
              {" "}
              Our Hotel booking is under development. Coming Soon!
            </p>
            <Image src={HotelComingSoon} alt="Zagol" className="w-full " />
          </div>
        );
      case "Cars":
        return (
          <div className="w-full px-4 mt-2 flex flex-col justify-center items-center">
            <p className="text-base text-center font-medium mb-2 text-[#036299]">
              {" "}
              Our car booking is under development. Coming Soon!
            </p>
            <Image src={carComingSoon} alt="Zagol" className="w-full" />
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      {/*     <div className="h-14 flex justify-start items-center w-full bg-[#2995D3] border-b px-2">
        <div className="h-10 w-10 flex items-center justify-center bg-white rounded-lg">
          <Logo className="w-6 h-6 " img={ZagolBlueLogo} />
        </div>
        <p className="w-2/3 text-white text-wrap px-4 py-2 text-xs">
          Get the app now for better experiences!
        </p>
        <button className="bg-neutral-100 px-2 py-1 rounded-md ml-auto">
          Open
        </button>
      </div> */}
      <div className="flex flex-col justify-start relative mobile-hero">
        <span className="h-fulll absolute inset-0 bg-[#2995D3] bg-opacity-60 transition-opacity "></span>
        <div className="flex  justify-center items-center lg:hidden w-[100vw] z-10 px-4 mb-10">
          <div className="flex justify-start items-center w-[40%] ">
            <Logo className="w-16 h-16 flex items-center " img={Zagol} />
          </div>
          <div
            className={`flex justify-end items-start text-sm text-white hover:transition-all w-[60%]`}
          >
            <MenuBar />
          </div>
        </div>
        <div className="flex justify-center items-center mb-5 z-10 ">
          {" "}
          {/* Dynamic title added below the tab navigation */}
          <h1 className="text-lg font-bold text-[#046ca8] mt-10">
            Find the Best {activeTab}
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center z-10">
          <ul className="mb-2 lg:hidden flex items-center justify-center text-base space-x-6 font-medium text-center text-white dark:border-gray-700 dark:text-gray-400 -mt-5 lg:-mt-0">
            {Tabs.map((tab, index) => (
              <li key={index} className="me-2 pb-2">
                <a
                  href="#"
                  className={`inline-block px-1 ${
                    activeTab === tab
                      ? "text-[#003858]  border-[#003858] border-b"
                      : "hover:text-gray-600 dark:text-neutral-200"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(tab);
                  }}
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center z-10 mt-7">
        {renderSearchForm()}
      </div>
    </div>
  );
};

export default HeaderForMobile;

{
  /*        <div
            className="w-5/6 h-10 p-2 flex justify-start items-center rounded-lg border-none text-neutral-500 bg-gray-100 shadow-md border-gray-300"
            onClick={() => setShowHeroSearchModal(true)}
          >
            <FontAwesomeIcon icon={faSearch} className="font-thin mr-3" />
            where to?
          </div>*/
}
