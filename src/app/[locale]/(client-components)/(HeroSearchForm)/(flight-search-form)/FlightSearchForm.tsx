"use client";

import React, { FC, useState, Fragment } from "react";
import LocationInput from "../LocationInput";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/solid";
import NcInputNumber from "@/components/NcInputNumber";
import FlightDateRangeInput from "./FlightDateRangeInput";
import { GuestsObject } from "../../type";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export interface FlightSearchFormProps {
  className?: string;
}

const flightClass = [
  {
    name: "Economy",
    href: "##",
  },
  {
    name: "Business",
    href: "##",
  },
];
const dropOffLocation = [
  {
    name: "roundTrip",
    href: "##",
  },
  {
    name: "oneWay",
    href: "##",
  },
  {
    name: "both",
    href: "##",
  },
];

const FlightSearchForm: FC<FlightSearchFormProps> = ({ className }) => {
  const t = useTranslations();
  const pathname = usePathname();
  const isRoot = pathname === "/en" || pathname === "/am";

  // Use the translation for the flight class placeholder
  const [flightClassState, setFlightClassState] = useState(
    t("flightClassPlaceholder")
  );
  const [dropOffLocationType, setDropOffLocationType] = useState("roundTrip");

  const [guestAdultsInputValue, setGuestAdultsInputValue] = useState(1);
  const [guestChildrenInputValue, setGuestChildrenInputValue] = useState(0);
  const [guestInfantsInputValue, setGuestInfantsInputValue] = useState(0);

  const handleChangeData = (value: number, type: keyof GuestsObject) => {
    if (type === "guestAdults") {
      setGuestAdultsInputValue(value);
    }
    if (type === "guestChildren") {
      setGuestChildrenInputValue(value);
    }
    if (type === "guestInfants") {
      setGuestInfantsInputValue(value);
    }
  };

  const totalGuests =
    guestAdultsInputValue + guestChildrenInputValue + guestInfantsInputValue;

  const resetFlightClass = () =>
    setFlightClassState(t("flightClassPlaceholder"));
  const resetDropOffLocation = () => setDropOffLocationType("roundTrip");

  const renderGuest = () => {
    return (
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              as="button"
              className={`px-4 py-1.5 rounded-md inline-flex items-center font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-xs`}
            >
              {/* Use guests.total translation passing count */}
              <span>{t("guests.total", { count: totalGuests })}</span>
              <ChevronDownIcon
                className={`ml-2 h-4 w-4 transition ease-in-out duration-150 ${
                  open ? "" : "text-opacity-70"
                }`}
                aria-hidden="true"
              />
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
              <Popover.Panel className="absolute z-20 w-full sm:min-w-[340px] max-w-sm bg-white dark:bg-neutral-800 top-full mt-3 left-1/2 -translate-x-1/2 py-5 sm:py-6 px-4 sm:px-8 rounded-3xl shadow-xl ring-1 ring-black/5 dark:ring-white/10">
                <NcInputNumber
                  className="w-full"
                  defaultValue={guestAdultsInputValue}
                  onChange={(value) => handleChangeData(value, "guestAdults")}
                  min={1}
                  label={t("guests.adults")}
                  desc={t("guests.adultsDesc")}
                />
                <NcInputNumber
                  className="w-full mt-6"
                  defaultValue={guestChildrenInputValue}
                  onChange={(value) => handleChangeData(value, "guestChildren")}
                  label={t("guests.children")}
                  desc={t("guests.childrenDesc")}
                />
                <NcInputNumber
                  className="w-full mt-6"
                  defaultValue={guestInfantsInputValue}
                  onChange={(value) => handleChangeData(value, "guestInfants")}
                  label={t("guests.infants")}
                  desc={t("guests.infantsDesc")}
                />
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  const renderSelectClass = () => {
    return (
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`px-4 py-1.5 rounded-md inline-flex items-center font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-xs`}
            >
              <span>{flightClassState}</span>
              {flightClassState !== t("flightClassPlaceholder") ? (
                <XMarkIcon
                  className="ml-2 h-4 w-4 text-[#2995D3] transition ease-in-out duration-150"
                  aria-hidden="true"
                  onClick={(e) => {
                    e.stopPropagation();
                    resetFlightClass();
                  }}
                />
              ) : (
                <ChevronDownIcon
                  className={`ml-2 h-4 w-4 transition ease-in-out duration-150 ${
                    open ? "" : "text-opacity-70"
                  }`}
                  aria-hidden="true"
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
                    {flightClass.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          setFlightClassState(t(`flightClass.${item.name}`));
                          close();
                        }}
                        className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <p className="text-sm font-medium">
                          {t(`flightClass.${item.name}`)}
                        </p>
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

  const renderDropoffLocation = () => {
    return (
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`px-4 py-1.5 rounded-md inline-flex items-center font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-xs`}
            >
              <span>{t(`dropOffLocation.${dropOffLocationType}`)}</span>
              {dropOffLocationType !== "roundTrip" ? (
                <XMarkIcon
                  className="ml-2 h-4 w-4 text-[#2995D3] transition ease-in-out duration-150"
                  aria-hidden="true"
                  onClick={(e) => {
                    e.stopPropagation();
                    resetDropOffLocation();
                  }}
                />
              ) : (
                <ChevronDownIcon
                  className={`ml-2 h-4 w-4 transition ease-in-out duration-150 ${
                    open ? "" : "text-opacity-70"
                  }`}
                  aria-hidden="true"
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
                    {dropOffLocation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          setDropOffLocationType(item.name);
                          close();
                        }}
                        className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <p className="text-sm font-medium">
                          {t(`dropOffLocation.${item.name}`)}
                        </p>
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
      <div className="py-6 px-10 flex flex-row flex-wrap border-b border-neutral-100 dark:border-neutral-700">
        <div className="mr-2 my-1 sm:mr-3 border border-neutral-300 dark:border-neutral-700 rounded-full z-20">
          {renderSelectClass()}
        </div>
        <div className="mr-2 my-1 sm:mr-3 border border-neutral-300 dark:border-neutral-700 rounded-full z-20">
          {renderGuest()}
        </div>
        <div className="my-1 border border-neutral-300 dark:border-neutral-700 rounded-full z-20">
          {renderDropoffLocation()}
        </div>
      </div>
    );
  };

  const renderForm = () => {
    return (
      <form
        className={`w-full relative mt-8 shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800 ${
          isRoot ? "rounded-3xl" : "rounded-3xl"
        } ${className}`}
      >
        {renderRadioBtn()}
        <div className="flex flex-1 rounded-full">
          <LocationInput
            placeHolder={t("flightLocationInput.flyingFrom")}
            desc={t("flightLocationInput.flyingFromDesc")}
            className="flex-1"
          />
          <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
          <LocationInput
            placeHolder={t("flightLocationInput.flyingTo")}
            desc={t("flightLocationInput.flyingToDesc")}
            className="flex-1"
            divHideVerticalLineClass="-inset-x-0.5"
          />
          <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
          <FlightDateRangeInput
            selectsRange={dropOffLocationType !== "oneWay"}
            className="flex-1"
          />
        </div>
      </form>
    );
  };

  return renderForm();
};

export default FlightSearchForm;
