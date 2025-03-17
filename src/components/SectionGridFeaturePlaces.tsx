"use client";
import React, { FC, ReactNode, useState } from "react";
import { DEMO_EXPERIENCES_LISTINGS } from "@/data/listings";
import { ExperiencesDataType } from "@/data/types";
import HeaderFilter from "./HeaderFilter";
import ExperiencesCard from "./ExperiencesCard";
import LocationList, { Location } from "./locationFilterTop";

const DEMO_DATA: ExperiencesDataType[] = DEMO_EXPERIENCES_LISTINGS.filter(
  (_, i) => i < 8
);

export interface SectionGridFeaturedPackagesProps {
  experiencesListings?: ExperiencesDataType[];
  gridClass?: string;
  heading?: ReactNode;
  subHeading?: ReactNode;
  headingIsCenter?: boolean;
  tabs?: string[];
  cardType?: "card1" | "card2";
}

const mockLocations: Location[] = [
  { id: 1, name: "All" },
  { id: 2, name: "Los Angeles" },
  { id: 3, name: "Chicago" },
  { id: 4, name: "Houston" },
  { id: 5, name: "Phoenix" },
  { id: 6, name: "Philadelphia" },
  { id: 7, name: "San Antonio" },
  { id: 8, name: "New York" },
];

const SectionGridFeaturedPackages: FC<SectionGridFeaturedPackagesProps> = ({
  experiencesListings = DEMO_DATA,
  gridClass = "",
  heading = "Featured Packages",
  headingIsCenter,
  cardType = "card2",
}) => {
  const [activeLocation, setActiveLocation] = useState<Location>(
    mockLocations[0]
  );

  const onLocationChange = (location: Location) => {
    setActiveLocation(location);
  };

  const filteredListings =
    activeLocation?.name === "All"
      ? experiencesListings
      : experiencesListings.filter(
          (listing) => listing.location === activeLocation?.name
        );

  const renderCard = (stay: ExperiencesDataType) => {
    return <ExperiencesCard key={stay.id} data={stay} />;
  };

  return (
    <div className="nc-SectionGridFeaturedPackages relative flex flex-col">
      <HeaderFilter heading={heading} />
      <LocationList
        locations={mockLocations}
        activeLocation={activeLocation}
        onLocationChange={onLocationChange}
        mobileLocations={mockLocations.slice(0, 4)}
      />
      <div className="bg-slate-50 dark:bg-neutral-800 lg:px-14 px-2 py-6 rounded-3xl -mt-1 lg:-mt-0">
        <div className="flex justify-center items-center rounded-lg "></div>
        <div
          className={`pt-2 hidden lg:grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4 ${gridClass}`}
        >
          {filteredListings.map((experiences) => renderCard(experiences))}
        </div>
        <div className="grid grid-cols-2 gap-2 lg:hidden">
          {filteredListings
            .slice(0, 4)
            .map((experiences) => renderCard(experiences))}
        </div>
      </div>
    </div>
  );
};

export default SectionGridFeaturedPackages;
