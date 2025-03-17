"use client";

import React, { Fragment, useState } from "react";
import { FC } from "react";
import DatePicker from "react-datepicker";
import { Popover, Transition } from "@headlessui/react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import DatePickerCustomHeaderTwoMonth from "@/components/DatePickerCustomHeaderTwoMonth";
import DatePickerCustomDay from "@/components/DatePickerCustomDay";
import ClearDataButton from "../ClearDataButton";
import ButtonSubmit from "../ButtonSubmit";

export interface RentalCarDatesRangeInputProps {
  className?: string;
  fieldClassName?: string;
  hasButtonSubmit?: boolean;
}

const RentalCarDatesRangeInput: FC<RentalCarDatesRangeInputProps> = ({
  className = "",
  fieldClassName = "[ nc-hero-field-padding ]",
  hasButtonSubmit = true,
}) => {
  // Use a single date state instead of a range.
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    new Date("2023/03/01")
  );

  // Modified onChangeDate for single day selection.
  const onChangeDate = (date: Date | null) => {
    setSelectedDate(date);
  };

  const renderInput = () => {
    return (
      <>
        <div className="text-neutral-300 dark:text-neutral-400">
          <CalendarIcon className="w-5 h-5 lg:w-7 lg:h-7 text-[#2995D3]" />
        </div>
        <div className="flex-grow text-left">
          <span className="block xl:text-md font-semibold">
            {selectedDate
              ? selectedDate.toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                })
              : "Add date"}
          </span>
          <span className="block mt-1 text-sm text-neutral-400 leading-none font-light">
            {"Pick a day"}
          </span>
        </div>
      </>
    );
  };

  return (
    <>
      <Popover
        className={`RentalCarDatesRangeInput relative flex ${className}`}
      >
        {({ open }) => (
          <>
            <div
              className={`flex-1 z-10 flex items-center focus:outline-none ${
                open ? "nc-hero-field-focused" : ""
              }`}
            >
              <Popover.Button
                className={`flex-1 z-10 flex relative ${fieldClassName} items-center space-x-3 focus:outline-none`}
              >
                {renderInput()}

                {selectedDate && open && (
                  <ClearDataButton onClick={() => onChangeDate(null)} />
                )}
              </Popover.Button>

              {/* BUTTON SUBMIT OF FORM */}
              {hasButtonSubmit && (
                <div className="pr-2 xl:pr-4">
                  <ButtonSubmit href="/stay-listings/listing-stay" />
                </div>
              )}
            </div>

            {open && (
              <div className="h-8 absolute self-center top-1/2 -translate-y-1/2 z-0 -left-0.5 right-0.5 bg-white dark:bg-neutral-800"></div>
            )}

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transitireact-datepickeron ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 top-full w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-neutral-800 p-8">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    monthsShown={2}
                    showPopperArrow={false}
                    inline
                    renderCustomHeader={(p) => (
                      <DatePickerCustomHeaderTwoMonth {...p} />
                    )}
                    renderDayContents={(day, date) => (
                      <DatePickerCustomDay dayOfMonth={day} date={date} />
                    )}
                  />
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};

export default RentalCarDatesRangeInput;
