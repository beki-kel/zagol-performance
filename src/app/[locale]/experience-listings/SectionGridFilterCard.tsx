import React, { FC, useState } from "react";
import { DEMO_EXPERIENCES_LISTINGS } from "@/data/listings";
import { StayDataType } from "@/data/types";
import Pagination from "@/shared/Pagination";
import Heading2 from "@/shared/Heading2";
import ExperiencesCard from "@/components/ExperiencesCard";
import PassengerDetailsModal from "@/components/checkout/packageCheckout/page";

export interface SectionGridFilterCardProps {
  className?: string;
  data?: StayDataType[];
}

const ITEMS_PER_PAGE = 8;

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
  className = "",
  data = DEMO_EXPERIENCES_LISTINGS,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackageName, setSelectedPackageName] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(0);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCardClick = (packageName: string, price: string) => {
    // Assuming you have state to store these values, e.g.:
    // const [selectedPackageName, setSelectedPackageName] = useState("");
    // const [selectedPrice, setSelectedPrice] = useState(0);
    setSelectedPackageName(packageName);
    setSelectedPrice(Number(price));
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = (passengerDetails: {
    firstName: string;
    lastName: string;
    gender: string;
    dob: string;
  }) => {
    console.log(passengerDetails);
    setIsModalOpen(false);
  };

  return (
    <div
      className={`lg:pt-4 nc-SectionGridFilterCard lg:px-20 flex flex-col items-center justify-center  ${className}`}
    >
      <Heading2 heading="Our Packages" />
      <p className="text-md font-thin mb-8 text-center lg:px-36">
        Explore our package options below. Click on a package for more details
        and guidance through the booking process.
      </p>
      <div className="grid grid-cols-1 gap-4 lg:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {paginatedData.map((stay) => (
          <div
            key={stay.id}
            onClick={() => handleCardClick(stay.title, stay.price)}
          >
            <ExperiencesCard />
          </div>
        ))}
      </div>

      <div className="flex w-full mt-16 justify-center items-center">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(data.length / ITEMS_PER_PAGE)}
          onPageChange={handlePageChange}
        />
      </div>
      <PassengerDetailsModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
        price={selectedPrice}
        packageName={selectedPackageName}
      />
    </div>
  );
};

export default SectionGridFilterCard;
