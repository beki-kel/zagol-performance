import React, { FC } from "react";

export interface listingFlightLoadingSkeletonProps {
  className?: string;
}

const listingFlightLoadingSkeleton: FC<listingFlightLoadingSkeletonProps> = ({
  className = "",
}) => {
  return (
    <div role="status" className="animate-pulse w-full">
      <div className=" bg-gray-200 dark:bg-gray-700  h-24 mb-8 mt-10 md:mt-0"></div>
      <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700  mb-4"></div>
      <div className="p-5 lg:p-10 grid grid-cols-1 gap-6 sm:bg-gray-200 rounded-3xl mb-20">
        <div className="h-20 bg-gray-100 rounded-lg  dark:bg-gray-700 "></div>
        <div className="h-20 bg-gray-100 rounded-lg  dark:bg-gray-700 "></div>
        <div className="h-20 bg-gray-100 rounded-lg dark:bg-gray-700 "></div>
        <div className="h-20 bg-gray-100 rounded-lg  dark:bg-gray-700 "></div>
        <div className="h-20 bg-gray-100 rounded-lg  dark:bg-gray-700 "></div>
        <div className="h-20 bg-gray-100 rounded-lg  dark:bg-gray-700 "></div>
        <div className="h-20 bg-gray-100 rounded-lg dark:bg-gray-700 "></div>
        <div className="h-20 bg-gray-100 rounded-lg  dark:bg-gray-700 "></div>
      </div>
    </div>
  );
};

export default listingFlightLoadingSkeleton;
