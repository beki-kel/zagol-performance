"use client";

import Checkbox from "@/shared/Checkbox";
import Heading2 from "@/shared/Heading2";
import Slider from "rc-slider";
import React, { useState } from "react";

export interface FilterOptions {
  airlines: string[];
  priceRange: [number, number];
  tripClass: ("Economy" | "Business" | "First-Class")[];
  flightClass: string[];
  stopPoints: string[];
}

interface SidebarFiltersProps {
  filterOptions: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

const SidebarFilters: React.FC<SidebarFiltersProps> = ({
  filterOptions,
  onFilterChange,
}) => {
  const [filters, setFilters] = useState(filterOptions);
  const [checkedFilters, setCheckedFilters] = useState<FilterOptions>({
    airlines: [],
    priceRange: [0, 5000],
    tripClass: [],
    flightClass: [],
    stopPoints: [],
  });

  const handleAirlineChange = (checked: boolean, name: string) => {
    const updatedAirlines = checked
      ? [...checkedFilters.airlines, name]
      : checkedFilters.airlines.filter((airline) => airline !== name);
    setCheckedFilters({ ...checkedFilters, airlines: updatedAirlines });
    setFilters({ ...filters, airlines: updatedAirlines });
    onFilterChange({ ...filters, airlines: updatedAirlines });
  };

  const handlePriceChange = (range: [number, number]) => {
    setCheckedFilters({ ...checkedFilters, priceRange: range });
    setFilters({ ...filters, priceRange: range });
    onFilterChange({ ...filters, priceRange: range });
  };

  const handleTripClassChange = (
    checked: boolean,
    type: "Economy" | "Business" | "First-Class"
  ) => {
    const updatedTripClasses = checked
      ? [...checkedFilters.tripClass, type]
      : checkedFilters.tripClass.filter((tripClass) => tripClass !== type);
    setCheckedFilters({ ...checkedFilters, tripClass: updatedTripClasses });
    setFilters({ ...filters, tripClass: updatedTripClasses });
    onFilterChange({ ...filters, tripClass: updatedTripClasses });
  };

  const handleFlightClassChange = (checked: boolean, name: string) => {
    const updatedClasses = checked
      ? [...checkedFilters.flightClass, name]
      : checkedFilters.flightClass.filter(
          (flightClass) => flightClass !== name
        );
    setCheckedFilters({ ...checkedFilters, flightClass: updatedClasses });
    setFilters({ ...filters, flightClass: updatedClasses });
    onFilterChange({ ...filters, flightClass: updatedClasses });
  };

  const handleStopPointsChange = (checked: boolean, name: string) => {
    const updatedStopPoints = checked
      ? [...checkedFilters.stopPoints, name]
      : checkedFilters.stopPoints.filter((stopPoint) => stopPoint !== name);
    setCheckedFilters({ ...checkedFilters, stopPoints: updatedStopPoints });
    setFilters({ ...filters, stopPoints: updatedStopPoints });
    onFilterChange({ ...filters, stopPoints: updatedStopPoints });
  };

  return (
    <div className=" bg-white dark:bg-neutral-900 rounded-2xl">
      <div className="py-4 rounded-lg flex flex-col bg-neutral-50 dark:bg-slate-800 shadow-md justify-center items-center border-neutral-200 dark:border-neutral-700 mb-3">
        <h4 className="text-md mb-3 font-medium pb-1 border-b w-5/6 text-center">
          Airlines
        </h4>
        {filterOptions.airlines.map((airline) => (
          <Checkbox
            key={airline}
            name={airline}
            label={airline}
            onChange={(checked) => handleAirlineChange(checked, airline)}
            className="mb-2 text-xs small w-full justify-center pl-5"
            checked={checkedFilters.airlines.includes(airline)}
          />
        ))}
      </div>
      <div className="py-4 rounded-lg flex flex-col bg-neutral-50 dark:bg-slate-800 shadow-md justify-center items-center border-neutral-200 dark:border-neutral-700 mb-3">
        <h4 className="text-md mb-3 font-medium pb-1 border-b w-5/6 text-center">
          Stop Points
        </h4>
        <div className="flex flex-col justify-start items-center w-full">
          {filterOptions.stopPoints.map((stopPoint) => (
            <Checkbox
              key={stopPoint}
              name={stopPoint}
              label={stopPoint}
              onChange={(checked) => handleStopPointsChange(checked, stopPoint)}
              className="mb-2 text-xs small w-full justify-center pl-5"
              checked={checkedFilters.stopPoints.includes(stopPoint)}
            />
          ))}
        </div>
      </div>

      <div className="py-4 rounded-lg flex flex-col bg-neutral-50 dark:bg-slate-800 shadow-md justify-center items-center border-neutral-200 dark:border-neutral-700 mb-3">
        <h4 className="text-md mb-3 font-medium pb-1 border-b w-5/6 text-center">
          Trip Class
        </h4>
        {["Economy", "Business", "First-Class"].map((type) => (
          <Checkbox
            key={type}
            name={type}
            label={type}
            onChange={(checked) =>
              handleTripClassChange(
                checked,
                type as "Economy" | "Business" | "First-Class"
              )
            }
            className="mb-2 text-xs small w-full justify-center pl-5"
            checked={checkedFilters.tripClass.includes(
              type as "Economy" | "Business" | "First-Class"
            )}
          />
        ))}
      </div>
      <div className=" p-4 rounded-lg bg-neutral-50 dark:bg-slate-800 shadow-md justify-center items-center border-neutral-200 dark:border-neutral-700 mb-3 ">
        <h4 className="text-md mb-3 font-medium pb-1 border-b w-full text-center">
          Price Range
        </h4>
        <Slider
          range
          min={0}
          max={5000}
          onChange={(range) => handlePriceChange(range as [number, number])}
          value={checkedFilters.priceRange}
        />
        <div className="flex justify-between mt-2">
          <span>${checkedFilters.priceRange[0]}</span>
          <span>${checkedFilters.priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default SidebarFilters;
