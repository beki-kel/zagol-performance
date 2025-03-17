import React, { FC, useState } from "react";
import Heading2 from "@/shared/Heading2";
import FlightCard, { FlightCardProps } from "@/components/FlightCard";
import OnTopDateSlider from "./onTopDateSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneSlash } from "@fortawesome/free-solid-svg-icons";
import noResultFound from "@/images/noResultFoundcroppes.png";
import PassengerDetailsModal from "@/components/checkout/flightCheckout/page"; // Import the modal

export interface SectionGridFilterCardProps {
  className?: string;
}

const DEMO_DATA: FlightCardProps["data"][] = [
  {
    id: "1",
    price: "$4,100",
    date: "2025-03-07",
    airlines: {
      logo: "https://www.gstatic.com/flights/airline_logos/70px/KE.png",
      name: "Korean Air",
    },
    flightType: "departure",
  },
  {
    id: "2",
    price: "$3,380",
    date: "2025-03-09",
    airlines: {
      logo: "https://www.gstatic.com/flights/airline_logos/70px/SQ.png",
      name: "Singapore Airlines",
    },
    flightType: "departure",
  },
  {
    id: "3",
    price: "$2,380",
    date: "2025-03-09",
    airlines: {
      logo: "https://www.gstatic.com/flights/airline_logos/70px/multi.png",
      name: "Philippine Airlines",
    },
    flightType: "departure",
  },
  {
    id: "4",
    price: "$2330",
    date: "2025-03-11",
    airlines: {
      logo: "https://www.gstatic.com/flights/airline_logos/70px/KE.png",
      name: "Korean Air",
    },
    flightType: "return",
  },
  {
    id: "5",
    price: "$3,380",
    date: "2025-03-12",
    airlines: {
      logo: "https://www.gstatic.com/flights/airline_logos/70px/SQ.png",
      name: "Singapore Airlines",
    },
    flightType: "return",
  },
  {
    id: "6",
    price: "$4,100",
    date: "2025-03-21",
    airlines: {
      logo: "https://www.gstatic.com/flights/airline_logos/70px/KE.png",
      name: "Korean Air",
    },
    flightType: "departure",
  },
  {
    id: "7",
    price: "$3,380",
    date: "2025-10-07",
    airlines: {
      logo: "https://www.gstatic.com/flights/airline_logos/70px/SQ.png",
      name: "Singapore Airlines",
    },
    flightType: "departure",
  },
];

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
  className = "",
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState<"departure" | "return">(
    "departure"
  );
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [selectedFlightType, setSelectedFlightType] = useState<string | null>(
    null
  );
  const [selectedAirlineName, setSelectedAirlineName] = useState<string | null>(
    null
  );
  const [selectedFlightPrice, setSelectedFlightPrice] = useState<number | null>(
    null
  );
  const itemsPerPage = 5;
  const totalPages = Math.ceil(DEMO_DATA.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  const handleCardClick = (
    flightType: string,
    airlineName: string,
    price: number
  ) => {
    setSelectedFlightType(flightType);
    setSelectedAirlineName(airlineName);
    setSelectedFlightPrice(price);
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

  const currentData = DEMO_DATA.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const filteredData = currentData.filter(
    (item) =>
      item.flightType === activeTab &&
      (!selectedDate || item.date === selectedDate)
  );

  return (
    <div
      className={`nc-SectionGridFilterCard ${className}`}
      data-nc-id="SectionGridFilterCard"
    >
      <div className="flex justify-center items-center rounded-lg ">
        <ul className="flex  lg:flex-wrap  text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li className="me-2">
            <a
              href="#"
              aria-current="page"
              className={`inline-block p-4 rounded-t-lg ${
                activeTab === "departure"
                  ? "text-[#2995D3] bg-gray-100 dark:bg-gray-800 "
                  : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("departure");
              }}
            >
              Departure Flight
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              className={`inline-block p-4 rounded-t-lg ${
                activeTab === "return"
                  ? "text-[#2995D3] bg-gray-100 dark:bg-gray-800 "
                  : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("return");
              }}
            >
              Return Flight
            </a>
          </li>
        </ul>
      </div>
      <div className="lg:px-5 lg:pb-5 lg:pt-3 lg:bg-neutral-50 lg:dark:bg-black/20 flex flex-col space-y-4 justify-center items-center rounded-3xl">
        <div className="hidden pb-2 border-neutral-300 dark:border-neutral-800 lg:flex justify-center">
          <OnTopDateSlider
            maxDays={30}
            daysToDisplay={7}
            onDateChange={handleDateChange}
          />
        </div>
        {/*Mobile*/}
        <div className="lg:hidden pb-2 border-neutral-300 dark:border-neutral-800 flex justify-center">
          <OnTopDateSlider
            maxDays={30}
            daysToDisplay={3}
            onDateChange={handleDateChange}
          />
        </div>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div
              key={index}
              onClick={() =>
                handleCardClick(
                  item.flightType,
                  item.airlines.name,
                  parseFloat(item.price.replace(/[^0-9.-]+/g, ""))
                )
              }
            >
              <FlightCard data={item} />
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-10">
            <FontAwesomeIcon
              icon={faPlaneSlash}
              className="w-20 h-20 text-[#2995D3]"
            />
            <p className="mt-4 text-neutral-500 dark:text-neutral-400">
              No flights available for this Selection
            </p>
          </div>
        )}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`w-8 h-8 rounded-full flex items-center justify-center ml-2 ${
                currentPage === index + 1
                  ? "bg-[#2995D3] text-white"
                  : "bg-slate-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
      <PassengerDetailsModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
        airlineName={`${selectedAirlineName}`}
        flightType={`${selectedFlightType}`}
        price={selectedFlightPrice ?? 0}
      />
    </div>
  );
};

export default SectionGridFilterCard;
