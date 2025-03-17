"use client";

import React, { FC, useState, Fragment } from "react";
import LocationInput from "../LocationInput";
import RentalCarDatesRangeInput from "./RentalCarDatesRangeInput";
import { Popover, Transition } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";

export interface RentalCarSearchFormProps {}

const StarRating = [
  { name: "1", href: "#", checked: false },
  { name: "2", href: "#", checked: false },
  { name: "3", href: "#", checked: false },
  { name: "4", href: "#", checked: false },
  { name: "5", href: "#", checked: false },
];

const Passenger = [
  { name: "1-3", href: "#" },
  { name: "3-6", href: "#" },
  { name: "6+", href: "#" },
];

const renderSelectRating = () => {
  const t = useTranslations("RentalCarSearchForm");
  const defaultText = t("starRatingDefault", { defaultValue: "Star Rating" });
  const [ratingState, setRatingState] = useState(StarRating);

  const handleCheckboxChange = (index: number) => {
    const newRatingState = [...ratingState];
    newRatingState[index].checked = !newRatingState[index].checked;
    setRatingState(newRatingState);
  };

  const selectedRatings =
    ratingState
      .filter((item) => item.checked)
      .map((item) => item.name)
      .join(", ") || defaultText;

  return (
    <Popover className="relative">
      {({ open, close }) => (
        <>
          <Popover.Button
            className={`px-4 py-1.5 rounded-md inline-flex items-center font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-xs`}
          >
            <span>{selectedRatings}</span>
            {selectedRatings === defaultText ? (
              <ChevronDownIcon
                className={`${
                  open ? "" : "text-opacity-70"
                } ml-2 h-4 w-4 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            ) : (
              <XMarkIcon
                className="ml-2 h-4 w-4 text-[#2995D3]"
                aria-hidden="true"
                onClick={(e) => {
                  e.stopPropagation();
                  setRatingState(
                    ratingState.map((item) => ({ ...item, checked: false }))
                  );
                }}
              />
            )}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-20 w-screen max-w-[200px] sm:max-w-[220px] px-4 top-full mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
              <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10">
                <div className="relative grid gap-8 bg-white dark:bg-neutral-800 p-7">
                  {ratingState.map((item, index) => (
                    <label
                      key={item.name}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-[#2995D3] focus-visible:ring-opacity-50"
                    >
                      <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => handleCheckboxChange(index)}
                        className="mr-2 rounded-md checked:bg-[#2995D3] focus:checked:bg-[#2995D3] hover:checked:bg-[#2995D3] hover:ring-[#2995D3] focus:ring-[#2995D3]"
                      />
                      <p className="text-sm font-medium flex items-center justify-start w-full">
                        {item.name}{" "}
                        <StarIcon className="h-3 w-3 text-yellow-500 ml-2" />
                      </p>
                    </label>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

const renderSelectPassengerCapacity = () => {
  const t = useTranslations("RentalCarSearchForm");
  const defaultText = t("passengersAmountDefault", {
    defaultValue: "Passengers Amount",
  });
  const [passengerState, setPassengerState] = useState(defaultText);

  return (
    <Popover className="relative">
      {({ open, close }) => (
        <>
          <Popover.Button
            className={`px-4 py-1.5 rounded-md inline-flex items-center font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-xs`}
          >
            <span>{passengerState}</span>
            {passengerState === defaultText ? (
              <ChevronDownIcon
                className={`${
                  open ? "" : "text-opacity-70"
                } ml-2 h-4 w-4 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            ) : (
              <XMarkIcon
                className="ml-2 h-4 w-4 text-[#2995D3]"
                aria-hidden="true"
                onClick={(e) => {
                  e.stopPropagation();
                  setPassengerState(defaultText);
                }}
              />
            )}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-20 w-screen max-w-[200px] sm:max-w-[220px] px-4 top-full mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
              <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10">
                <div className="relative grid gap-8 bg-white dark:bg-neutral-800 p-7">
                  {Passenger.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setPassengerState(item.name);
                        close();
                      }}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <p className="text-sm font-medium">{item.name}</p>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

const renderRadioBtn = () => {
  return (
    <div className="py-6 px-10 flex flex-row flex-wrap border-b border-neutral-100 dark:border-neutral-700 z-20">
      <div className="mr-2 my-1 sm:mr-3 border border-neutral-300 dark:border-neutral-700 rounded-full">
        {renderSelectRating()}
      </div>
      <div className="mr-2 my-1 sm:mr-3 border border-neutral-300 dark:border-neutral-700 rounded-full">
        {renderSelectPassengerCapacity()}
      </div>
    </div>
  );
};

const RentalCarSearchForm: FC<RentalCarSearchFormProps> = ({}) => {
  const t = useTranslations();
  return (
    <form className="w-full relative mt-8 flex flex-col rounded-3xl shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800">
      {renderRadioBtn()}
      <div className="relative flex flex-row">
        <LocationInput
          placeHolder={t("carListing.locationPlaceholder")}
          desc={t("carListing.locationDescDropOff")}
          className="flex-1"
        />
        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        <LocationInput
          placeHolder={t("carListing.locationPlaceholder")}
          desc={t("carListing.locationDesc")}
          className="flex-1"
          divHideVerticalLineClass="-inset-x-0.5"
        />
        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        <RentalCarDatesRangeInput className="flex-1" />
      </div>
    </form>
  );
};

export default RentalCarSearchForm;
