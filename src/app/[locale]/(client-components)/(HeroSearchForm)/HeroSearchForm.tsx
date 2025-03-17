"use client";

import React, { FC, useState } from "react";
import StaySearchForm from "./(stay-search-form)/StaySearchForm";
import RentalCarSearchForm from "./(car-search-form)/RentalCarSearchForm";
import FlightSearchForm from "./(flight-search-form)/FlightSearchForm";
import HeroIconRender from "@/components/HeroIconRender";
import { useTranslations } from "next-intl";

export type SearchTab = "Flights" | "Hotels" | "Cars";

export interface HeroSearchFormProps {
  className?: string;
  currentTab?: SearchTab;
  currentPage?: "Hotels" | "Cars" | "Flights";
}

const HeroSearchForm: FC<HeroSearchFormProps> = ({
  className = "",
  currentTab = "Flights",
}) => {
  const tabs: SearchTab[] = ["Flights", "Hotels", "Cars"];
  const [tabActive, setTabActive] = useState<SearchTab>(currentTab);
  const t = useTranslations();

  const renderTab = () => {
    return (
      <div className="relative flex justify-center items-center ">
        <ul className="md:w-auto px-2 py-2 shadow-md bg-white/30 dark:bg-black/40  backdrop-blur-md backdrop-filter rounded-full ml-2 sm:ml-6 md:ml-12 flex justify-center space-x-5 sm:space-x-8 lg:space-x-8 overflow-x-auto hiddenScrollbar light:border mb-4">
          {tabs.map((tab) => {
            const active = tab === tabActive;
            return (
              <li
                onClick={() => setTabActive(tab)}
                className={`flex-shrink-0 flex items-center cursor-pointer text-sm lg:text-md font-medium transition-all duration-100 ${
                  active
                    ? "bg-[#2995D3] bg-opacity-40 py-2 px-4 rounded-full text-white"
                    : "text-neutral-700  dark:text-neutral-100 hover:text-neutral-700 dark:hover:text-neutral-400 px-3 "
                }`}
                key={tab}
              >
                {t(`tabNames.${tab}`)}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const renderForm = () => {
    switch (tabActive) {
      case "Flights":
        return <FlightSearchForm />;
      case "Hotels":
        return <StaySearchForm />;
      case "Cars":
        return <RentalCarSearchForm />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`nc-HeroSearchForm w-full max-w-6xl py-5 lg:py-0 ${className}`}
    >
      <div className="relative mb-2">
        {renderForm()}
        <div className="absolute inset-0 -top-9">{renderTab()}</div>
      </div>
    </div>
  );
};

export default HeroSearchForm;
