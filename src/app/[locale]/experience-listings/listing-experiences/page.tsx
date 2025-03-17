"use client";
import React, { FC, useState, useEffect } from "react";
import SectionGridFilterCard from "../SectionGridFilterCard";
import ListingStayLoadingSkeleton from "../../stay-listings/listingStayAndCarLoadingSkeleton";

export interface ListingExperiencesPageProps {}

const ListingExperiencesPage: FC<ListingExperiencesPageProps> = ({}) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000); // 2 second delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showContent ? (
        <div className="container relative">
          <SectionGridFilterCard className="pb-24 lg:pb-28" />
        </div>
      ) : (
        <div className="container flex flex-col items-center pb-20 mt-10">
          <ListingStayLoadingSkeleton />
        </div>
      )}
    </>
  );
};

export default ListingExperiencesPage;
