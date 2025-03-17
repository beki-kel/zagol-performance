"use client";
import SectionHeroArchivePage from "@/app/[locale]/(server-components)/SectionHeroArchivePage";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import React, { FC, useEffect, useState } from "react";
import SectionGridFilterCard from "../SectionGridFilterCard";
import ListingFlightLoadingSkeleton from "../listingFlightLoadingSkeleton";
import SidebarFilters, { FilterOptions } from "../SidebarFilters";
import Heading2 from "@/shared/Heading2";

export interface ListingFlightsPageProps {}

const ListingFlightsPage: FC<ListingFlightsPageProps> = ({}) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const initialFilterOptions: FilterOptions = {
    airlines: ["Airline1", "Airline2"],
    priceRange: [0, 5000],
    tripClass: ["Economy", "Business", "First-Class"],
    flightClass: ["Economy", "Business"],
    stopPoints: ["No stop", "1 Stop", "1+ Stop"],
  };

  const [filters, setFilters] = useState(initialFilterOptions);

  const handleFilterChange = (updatedFilters: FilterOptions) => {
    setFilters(updatedFilters);
  };

  return (
    <>
      {showContent ? (
        <div className="flex flex-col">
          <div className=" flex justify-center items-center  text-center">
            <Heading2
              heading="Singapore - Tokyo"
              subHeading={
                <span className="block text-neutral-6000 dark:text-neutral-400 mt-3">
                  22 flights
                  <span className="mx-2 text-neutral-300">|</span>
                  round trip
                  <span className="mx-2 text-neutral-300">|</span>2 Guests
                </span>
              }
            />
          </div>
          <div className="container flex justify-center items-start relative gap-10 ">
            <div className="w-[20vw] rounded-2xl pb-28 mt-4 hidden lg:block">
              <SidebarFilters
                filterOptions={initialFilterOptions}
                onFilterChange={handleFilterChange}
              />
            </div>
            <SectionGridFilterCard className="pb-24 lg:pb-28 lg:w-[70vw] w-[100vw]" />
          </div>
        </div>
      ) : (
        <div className="container">
          <ListingFlightLoadingSkeleton />
        </div>
      )}
    </>
  );
};

export default ListingFlightsPage;
