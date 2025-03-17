"use client";

import Image from "next/image";
import React, { FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faPlaneArrival,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import flight_path from "@/images/flight-route-removebg-preview.png";

export interface FlightCardProps {
  className?: string;
  data: {
    id: string;
    airlines: {
      logo: string;
      name: string;
    };
    date: string;
    price: string;
    flightType: "departure" | "return";
  };
}

const FlightCard: FC<FlightCardProps> = ({ className = "", data }) => {
  const [isOpen, setIsOpen] = useState(true);

  const renderDetailTop = () => {
    return (
      <div>
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex my-5 md:my-0 w-full">
            <div className="flex ml-4 py-4 text-sm w-full  dark:border-neutral-800">
              <div className="flex flex-col items-center w-full justify-between ">
                <FontAwesomeIcon
                  icon={faPlaneDeparture}
                  className="text-[#2995D3] w-6 h-6 pb-2"
                />
                <div className="flex flex-col text-center space-y-1 w-5/6">
                  <span className="text-neutral-500 dark:text-neutral-400">
                    Monday, August 12 · 10:00
                  </span>
                  <span className="font-semibold">HND</span>
                </div>
              </div>
              <div className="flex justify-center items-center ">
                <Image
                  src={flight_path}
                  width={400}
                  height={400}
                  alt="airplane"
                />
              </div>

              <div className="flex flex-col items-center w-full justify-between ">
                <FontAwesomeIcon
                  icon={faPlaneArrival}
                  className="text-[#2995D3] w-6 h-6 pb-2"
                />
                <div className="flex flex-col text-center space-y-1 w-5/6">
                  <span className="text-neutral-500 dark:text-neutral-400">
                    Monday, August 16 · 10:00
                  </span>
                  <span className="font-semibold">SIN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-FlightCardgroup p-1 sm:p-6 xl:px-2 xl:py-2 relative bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow space-y-3 ${className}`}
    >
      <div className={`sm:pr-20 xl:px-4 relative ${className}`}>
        {/*  eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a href="##" className="absolute inset-0" />
        <div className="flex flex-col">
          <div className="flex justify-center items-center border-b  w-full py-2 px-3 lg:px-10">
            <div className="lg:w-1/3 w-1/2 flex justify-start items-center">
              <div className="mr-4">
                <Image
                  src={data.airlines.logo}
                  width={12}
                  height={12}
                  className="w-7"
                  alt="air-logo"
                  sizes="40px"
                />
              </div>
              <div className="text-sm text-neutral-500 dark:text-neutral-200  font-normal mt-0.5 text-center">
                {data.airlines.name}
              </div>
            </div>
            <div className="w-1/3 hidden lg:flex justify-center items-center">
              <div className="text-md text-neutral-900 dark:text-neutral-200 font-normal mt-0.5 text-center flex items-center">
                <FontAwesomeIcon
                  icon={faClock}
                  className="mr-2 text-neutral-500"
                />
                11:00 - 20:00
              </div>
            </div>
            <div className="flex lg:w-1/3 w-1/2 justify-end items-center -mr-4">
              <span className="text-xl font-semibold text-neutral-900 dark:text-white">
                {data.price}
              </span>
            </div>
          </div>
          {renderDetailTop()}
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
