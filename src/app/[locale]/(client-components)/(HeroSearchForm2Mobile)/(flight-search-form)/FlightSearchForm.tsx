"use client";

import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import DatesRangeInput from "../DatesRangeInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarXmark,
  faCalendar,
  faPlaneDeparture,
  faPlaneArrival,
  faLocationPin,
  faTicket,
  faArrowRight,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  const router = useRouter();
  const { locale } = useParams();
  const [tripType, setTripType] = useState<"oneWay" | "return" | "multiCity">(
    "oneWay"
  );
  const [flightClass, setFlightClass] = useState("Economy");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [flightPlusHotel, setFlightPlusHotel] = useState(false);
  const [departureDate, setDepartureDate] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div className="px-4">
      <div className="max-w-md w-full bg-white dark:bg-neutral-900 rounded-xl shadow-lg dark:shadow-slate-800 p-6 -mt-10">
        {/* Tabs */}
        <div className="flex mb-4 relative border-2 rounded-lg">
          <button
            onClick={() => setTripType("oneWay")}
            className={`w-1/2 py-1 text-center text-sm font-semibold rounded-l-lg relative z-10 ${
              tripType === "oneWay"
                ? "bg-white dark:bg-neutral-900 text-[#2995D3]"
                : "bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
            }`}
            style={{
              clipPath:
                tripType === "oneWay"
                  ? "polygon(10% 0, 100% 0, 100% 100%, 0 100%)"
                  : "polygon(0 0, 100% 0, 90% 100%, 0 100%)",
            }}
          >
            One-way
          </button>
          <button
            onClick={() => setTripType("return")}
            className={`w-1/2 py-1 text-center text-sm font-semibold rounded-r-lg relative z-10 ${
              tripType === "return"
                ? "bg-white dark:bg-neutral-900 text-[#2995D3]"
                : "bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
            }`}
            style={{
              clipPath:
                tripType === "return"
                  ? "polygon(0 0, 90% 0, 100% 100%, 0 100%)"
                  : "polygon(0 0, 100% 0, 100% 100%, 10% 100%)",
            }}
          >
            Return
          </button>
        </div>

        {/* From and To Inputs */}
        <div className="mb-4">
          <div className="flex items-end">
            <div className="flex-1">
              <label className="text-sm font-medium text-neutral-900 dark:text-neutral-100 pl-3 flex items-center justify-start">
                <FontAwesomeIcon
                  icon={faLocationPin}
                  className="mr-2 text-[#2995D3] h-3 w-3"
                />
                From
              </label>
              <input
                type="text"
                placeholder="Location"
                className="w-full border-0 focus:ring-0 hover:ring-0 text-xs bg-transparent text-neutral-900 dark:text-neutral-100"
              />
            </div>
            <div className="z-10 mx-2 mb-5 text-[#2995D3]">
              <FontAwesomeIcon icon={faPlane} size="lg" className="-mr-4 " />
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium text-neutral-900 dark:text-neutral-100 pl-3 flex justify-end items-center">
                <FontAwesomeIcon
                  icon={faLocationPin}
                  className="mr-2 text-[#2995D3] h-3 w-3"
                />
                To
              </label>
              <input
                type="text"
                placeholder="Location"
                className="w-full border-0 focus:ring-0 hover:ring-0 text-end text-xs bg-transparent text-neutral-900 dark:text-neutral-100 pr-0"
              />
            </div>
          </div>
          <hr className="mt-2 border-b border-gray-300 dark:border-gray-600" />
        </div>

        {/* Dates */}
        <div className="mb-4 relative">
          <label className="text-sm text-neutral-900 dark:text-neutral-100 pl-3 flex items-center">
            <FontAwesomeIcon
              icon={faCalendar}
              className="mr-2 text-[#2995D3]"
            />
            {tripType === "oneWay" ? "Depart" : "Return"}
          </label>
          <input
            type="text"
            value={departureDate}
            placeholder="Select date"
            readOnly
            className="w-full border-0 focus:ring-0 hover:ring-0 text-xs bg-transparent text-neutral-900 dark:text-neutral-100"
          />
          <button
            type="button"
            onClick={() => setShowCalendar((prev) => !prev)}
            className="absolute right-2 top-10 transform -translate-y-1/2"
          >
            {showCalendar ? (
              <FontAwesomeIcon
                icon={faCalendarXmark}
                className="h-4 w-4 text-[#2995D3]"
              />
            ) : (
              <FontAwesomeIcon
                icon={faCalendar}
                className="h-4 w-4 text-[#2995D3]"
              />
            )}
          </button>
          <hr className="mt-2 border-b border-gray-300 dark:border-gray-600" />
        </div>
        {showCalendar && (
          <div className="-mt-2 px-4">
            <DatesRangeInput
              onDateChange={(date) => {
                if (date) {
                  const formattedDate = date.toISOString().split("T")[0];
                  setDepartureDate(formattedDate);
                  setShowCalendar(false);
                }
              }}
            />
          </div>
        )}

        {/* Flight Class */}
        <div className="flex flex-col border-b-[3px] mb-4">
          <label className="mb-4 text-sm font-medium text-neutral-900 dark:text-neutral-100 pl-3 flex items-center">
            <FontAwesomeIcon icon={faTicket} className="mr-2 text-[#2995D3]" />
            Flight Class - {flightClass}
          </label>
          <div className="mb-4 flex justify-around">
            <button
              onClick={() => setFlightClass("Business")}
              className={`px-6 py-1 rounded-3xl text-xs ${
                flightClass === "Business"
                  ? "bg-[#2995D3] text-white"
                  : "bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
              }`}
            >
              Business
            </button>
            <button
              onClick={() => setFlightClass("Economy")}
              className={`px-4 py-1 rounded-3xl text-xs ${
                flightClass === "Economy"
                  ? "bg-[#2995D3] text-white"
                  : "bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
              }`}
            >
              Economy
            </button>
          </div>
        </div>

        {/* Passengers */}
        <div className="flex justify-center py-2 items-center space-x-2 mb-4">
          <div>
            <label className="block text-xs font-medium text-neutral-900 dark:text-neutral-100">
              Adults
            </label>
            <input
              type="number"
              min={0}
              value={adults}
              onChange={(e) => setAdults(parseInt(e.target.value))}
              className="w-16 p-0 border rounded text-center bg-transparent text-neutral-900 dark:text-neutral-100"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-neutral-900 dark:text-neutral-100">
              Children
            </label>
            <input
              type="number"
              min={0}
              value={children}
              onChange={(e) => setChildren(parseInt(e.target.value))}
              className="w-16 p-0 border rounded text-center bg-transparent text-neutral-900 dark:text-neutral-100"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-neutral-900 dark:text-neutral-100">
              Infants
            </label>
            <input
              type="number"
              min={0}
              value={infants}
              onChange={(e) => setInfants(parseInt(e.target.value))}
              className="w-16 p-0 border rounded text-center bg-transparent text-neutral-900 dark:text-neutral-100"
            />
          </div>
        </div>

        {/* Search Button */}
        <button
          onClick={() =>
            router.push(`/${locale}/flight-listings/listing-flights`)
          }
          className="w-full py-2 bg-[#2995D3] text-white rounded-lg hover:bg-opacity-35 transition-colors"
        >
          {tripType === "oneWay"
            ? "Search One-Way Flights"
            : "Search Round Flights"}
        </button>
      </div>
    </div>
  );
}
