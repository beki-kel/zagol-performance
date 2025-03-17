"use client";
import React, { useState } from "react";

export interface Location {
  id: number;
  name: string;
}

interface LocationListProps {
  locations: Location[];
  activeLocation: Location;
  onLocationChange: (location: Location) => void;
  mobileLocations: Location[];
}

const LocationList: React.FC<LocationListProps> = ({
  locations,
  activeLocation,
  onLocationChange,
  mobileLocations,
}) => {
  const handleLocationChange = (location: Location) => {
    onLocationChange(location);
  };

  return (
    <>
      <ul className="hidden lg:flex items-center justify-center text-sm font-medium text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
        {locations.map((location) => (
          <li key={location.id} className="me-2 pb-2">
            <a
              href="#"
              className={`inline-block py-2 px-4  rounded-full ${
                activeLocation?.id === location.id
                  ? "text-gray-100 bg-[#2995D3] "
                  : "hover:text-gray-600 bg-gray-200 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-300"
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleLocationChange(location);
              }}
            >
              {location.name}
            </a>
          </li>
        ))}
      </ul>
      <ul className="lg:hidden flex items-center justify-center text-sm font-medium text-center text-gray-500 dark:border-gray-700 dark:text-gray-400 -mt-2 lg:-mt-0">
        {mobileLocations.map((location) => (
          <li key={location.id} className="me-2 pb-2">
            <a
              href="#"
              className={`inline-block px-1 ${
                activeLocation?.id === location.id
                  ? "text-[#2995D3] border-[#2995D3] border-b"
                  : "hover:text-gray-600   "
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleLocationChange(location);
              }}
            >
              {location.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LocationList;
