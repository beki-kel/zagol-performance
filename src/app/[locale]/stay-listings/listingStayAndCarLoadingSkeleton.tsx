import React, { FC } from "react";

export interface listingStayLoadingSkeletonProps {
  className?: string;
}

const listingStayLoadingSkeleton: FC<listingStayLoadingSkeletonProps> = ({
  className = "",
}) => {
  return (
    <div role="status" className="animate-pulse w-full">
      <div className=" bg-gray-200 dark:bg-gray-700  h-28 mb-12 lg:mb-16"></div>
      <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700  mb-8 lg:mb-11"></div>
      <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="h-72 bg-gray-200 rounded-lg  dark:bg-gray-700 "></div>
        <div className="h-72 bg-gray-200 rounded-lg  dark:bg-gray-700 "></div>
        <div className="h-72 bg-gray-200 rounded-lg dark:bg-gray-700 "></div>
        <div className="h-72 bg-gray-200 rounded-lg  dark:bg-gray-700 "></div>
        <div className="h-72 bg-gray-200 rounded-lg  dark:bg-gray-700 "></div>
        <div className="h-72 bg-gray-200 rounded-lg  dark:bg-gray-700 "></div>
        <div className="h-72 bg-gray-200 rounded-lg dark:bg-gray-700 "></div>
        <div className="h-72 bg-gray-200 rounded-lg  dark:bg-gray-700 "></div>
      </div>

      <div className="h-12 bg-gray-200 rounded-full dark:bg-gray-700 mt-16  "></div>
    </div>
  );
};

export default listingStayLoadingSkeleton;
