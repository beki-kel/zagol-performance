"use client";

import React, { useState } from "react";
import { FC } from "react";
import LocationInput from "../LocationInput";
import GuestsInput from "../GuestsInput";
import StayDatesRangeInput from "./StayDatesRangeInput";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment as Frag } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";

interface RoomType {
  name: string;
}

interface StarRatingItem {
  name: string;
  checked: boolean;
}

const StaySearchForm: FC<{}> = ({}) => {
  const t = useTranslations("staySearchForm");

  const roomType: RoomType[] = [
    { name: "roomTypes.singleBed" },
    { name: "roomTypes.kingBed" },
    { name: "roomTypes.doubleBed" },
    { name: "roomTypes.threeBeds" },
    { name: "roomTypes.fourPlusBeds" },
  ];

  const defaultStarRating: string = t("starRatingDefault");

  const initialStarRating: StarRatingItem[] = [
    { name: "1", checked: false },
    { name: "2", checked: false },
    { name: "3", checked: false },
    { name: "4", checked: false },
    { name: "5", checked: false },
  ];

  const renderSelectClass = () => {
    // Use translated default value for room type
    const [roomTypeState, setRoomTypeState] = useState(t("bedTypeDefault"));
    return (
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : ""}
                px-4 py-1.5 rounded-md inline-flex items-center font-medium 
                hover:text-opacity-100 focus:outline-none focus-visible:ring-2 
                focus-visible:ring-white focus-visible:ring-opacity-75 text-xs`}
            >
              <span>{roomTypeState}</span>
              {roomTypeState === t("bedTypeDefault") ? (
                <ChevronDownIcon
                  className={`${open ? "" : "text-opacity-70"} ml-2 h-4 w-4 
                  group-hover:text-opacity-80 transition ease-in-out duration-150`}
                  aria-hidden="true"
                />
              ) : (
                <XMarkIcon
                  className="ml-2 h-4 w-4 text-[#2995D3]"
                  aria-hidden="true"
                  onClick={(e) => {
                    e.stopPropagation();
                    setRoomTypeState(t("bedTypeDefault"));
                  }}
                />
              )}
            </Popover.Button>
            <Transition
              as={Frag}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className="absolute z-20 w-screen max-w-[200px] sm:max-w-[220px] px-4 
                top-full mt-3 transform -translate-x-1/2 left-1/2 sm:px-0"
              >
                <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10">
                  <div className="relative grid gap-8 bg-white dark:bg-neutral-800 p-7">
                    {roomType.map((item) => (
                      <li
                        key={item.name}
                        onClick={(e) => {
                          e.preventDefault();
                          setRoomTypeState(t(item.name));
                          close();
                        }}
                        className="flex items-center p-2 -m-3 transition duration-150 
                          ease-in-out rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 
                          focus:outline-none focus-visible:ring focus-visible:ring-orange-500 
                          focus-visible:ring-opacity-50"
                      >
                        <p className="text-sm font-medium">{t(item.name)}</p>
                      </li>
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

  const renderSelectRating = () => {
    const [ratingState, setRatingState] = useState(initialStarRating);

    const handleCheckboxChange = (index: number) => {
      const newRatingState = [...ratingState];
      newRatingState[index].checked = !newRatingState[index].checked;
      setRatingState(newRatingState);
    };

    const selectedRatings =
      ratingState
        .filter((item) => item.checked)
        .map((item) => item.name)
        .join(", ") || defaultStarRating;

    return (
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : ""}
                px-4 py-1.5 rounded-md inline-flex items-center font-medium 
                hover:text-opacity-100 focus:outline-none focus-visible:ring-2 
                focus-visible:ring-white focus-visible:ring-opacity-75 text-xs`}
            >
              <span>{selectedRatings}</span>
              {selectedRatings === defaultStarRating ? (
                <ChevronDownIcon
                  className={`${open ? "" : "text-opacity-70"} ml-2 h-4 w-4 
                    group-hover:text-opacity-80 transition ease-in-out duration-150`}
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
              as={Frag}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className="absolute z-20 w-screen max-w-[200px] sm:max-w-[220px] px-4 
                top-full mt-3 transform -translate-x-1/2 left-1/2 sm:px-0"
              >
                <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10">
                  <div className="relative grid gap-8 bg-white dark:bg-neutral-800 p-7">
                    {ratingState.map((item, index) => (
                      <label
                        key={item.name}
                        className="flex items-center p-2 -m-3 transition duration-150 ease-in-out 
                          rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none 
                          focus-visible:ring focus-visible:ring-[#2995D3] focus-visible:ring-opacity-50"
                      >
                        <input
                          type="checkbox"
                          checked={item.checked}
                          onChange={() => handleCheckboxChange(index)}
                          className="mr-2 checked:bg-[#2995D3] focus:checked:bg-[#2995D3] 
                            hover:checked:bg-[#2995D3] rounded-md hover:ring-[#2995D3] focus:ring-[#2995D3]"
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

  const renderRadioBtn = () => {
    return (
      <div
        className="py-6 px-10 flex flex-row flex-wrap border-b border-neutral-100 
        dark:border-neutral-700 z-20"
      >
        <div
          className="mr-2 my-1 sm:mr-3 border border-neutral-300 
          dark:border-neutral-700 rounded-full"
        >
          {renderSelectClass()}
        </div>
        <div
          className="mr-2 my-1 sm:mr-3 border border-neutral-300 
          dark:border-neutral-700 rounded-full"
        >
          {renderSelectRating()}
        </div>
      </div>
    );
  };

  const renderForm = () => {
    return (
      <form
        className="w-full relative mt-8 flex flex-col rounded-3xl 
         shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800"
      >
        {renderRadioBtn()}
        <div className="flex flex-1 rounded-full">
          <LocationInput className="flex-[1.5]" />
          <div
            className="self-center border-r border-slate-200 
            dark:border-slate-700 h-8"
          ></div>
          <StayDatesRangeInput className="flex-1" />
          <div
            className="self-center border-r border-slate-200 
            dark:border-slate-700 h-8"
          ></div>
          <GuestsInput className="flex-1" />
        </div>
      </form>
    );
  };

  return renderForm();
};

export default StaySearchForm;
