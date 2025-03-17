"use client";

import DatePicker from "react-datepicker";
import React, { FC, useState } from "react";
import DatePickerCustomHeaderTwoMonth from "@/components/DatePickerCustomHeaderTwoMonth";
import DatePickerCustomDay from "@/components/DatePickerCustomDay";

export interface StayDatesRangeInputProps {
  className?: string;
  onDateChange?: (date: Date | null) => void;
}

const StayDatesRangeInput: FC<StayDatesRangeInputProps> = ({
  className = "",
  onDateChange,
}) => {
  // Set the current date with time trimmed to disable past days properly.
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [selectedDate, setSelectedDate] = useState<Date | null>(today);

  const onChangeDate = (date: Date | null) => {
    setSelectedDate(date);
    if (onDateChange) {
      onDateChange(date);
    }
  };

  return (
    <div>
      <div className={`w-full relative z-10 pb-5 ${className}`}>
        <DatePicker
          selected={selectedDate}
          onChange={onChangeDate}
          monthsShown={1}
          showPopperArrow={true}
          minDate={today}
          filterDate={(date) => date >= today}
          inline
          renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="w-full flex justify-between items-center px-2">
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
                type="button"
                className="text-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <span className="text-sm font-medium">
                {date.toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
                type="button"
                className="text-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}
          renderDayContents={(day, date) => (
            <DatePickerCustomDay dayOfMonth={day} date={date} />
          )}
        />
      </div>
    </div>
  );
};

export default StayDatesRangeInput;
