"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface OnTopDateSliderProps {
  maxDays: number;
  daysToDisplay: number;
  onDateChange: (date: string) => void;
}

const OnTopDateSlider: React.FC<OnTopDateSliderProps> = ({
  maxDays,
  daysToDisplay,
  onDateChange,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const generateDates = (start: Date, days: number) => {
    return Array.from({ length: days }, (_, i) => {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      return date;
    });
  };

  const handleClick = (index: number) => {
    setSelectedIndex((prevIndex) => (prevIndex === index ? null : index));
    const selectedDate = dates[index].toISOString().split("T")[0];
    onDateChange(selectedDate);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + daysToDisplay);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - daysToDisplay, 0));
  };

  const dates = generateDates(startDate, maxDays);
  const visibleDates = dates.slice(currentIndex, currentIndex + daysToDisplay);

  return (
    <div className="date-slider flex lg:space-x-2">
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="lg:mx-2 "
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="flex lg:space-x-10 space-x-3 lg:px-10 pr-1 pl-3">
        {visibleDates.map((date, index) => (
          <div
            key={index}
            className={`date-item flex flex-col items-center 
                        justify-center  rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 ${
                          selectedIndex === index + currentIndex
                            ? "bg-neutral-200 dark:bg-neutral-700 scale-105"
                            : ""
                        }`}
            onClick={() => handleClick(index + currentIndex)}
          >
            <div className="relative h-[30%] border-x bg-[#2995D3] w-full rounded-t-lg">
              <div className="bg-[#85c9f0] absolute border-2 top-0 right-2 h-2.5 w-1.5 rounded-full -mt-1"></div>
              <div className="bg-[#85c9f0]  absolute border-2  top-0 left-2 h-2.5 w-1.5 rounded-full -mt-1"></div>
            </div>
            <div className="h-[70%] border-b border-x px-2 py-2 flex flex-col justify-center items-center">
              <p className="text-xs text-neutral-700 dark:text-white font-semibold">
                {date.getDate()}
              </p>
              <p className="font-thin text-xs text-neutral-700 dark:text-white">
                {date.toLocaleDateString("en-US", { month: "long" })}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        disabled={currentIndex + daysToDisplay >= dates.length}
        className="mx-2"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default OnTopDateSlider;
