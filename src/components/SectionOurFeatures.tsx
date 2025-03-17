import React, { FC } from "react";
import rightImgPng from "@/images/our-features.png";
import Image, { StaticImageData } from "next/image";
import Badge from "@/shared/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faDollarSign,
  faCalendarAlt,
  faMobileAlt,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";

export interface SectionOurFeaturesProps {
  className?: string;
  rightImg?: StaticImageData;
  type?: "type1" | "type2";
}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({
  className = "lg:py-3",
  rightImg = rightImgPng,
  type = "type1",
}) => {
  return (
    <div
      className={`hidden nc-SectionOurFeatures relative lg:flex flex-col items-center ${
        type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div></div>
      <div className="hidden lg:w-1/2 lg:flex lg:justify-center items-end">
        <Image src={rightImg} alt="" height={500} />
      </div>
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-1/2 ${
          type === "type1" ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
        <ul className="space-y-6 mt-6">
          <li className="space-y-2">
            <Badge name="Travel" />
            <span className=" font-semibold flex items-center">
              <FontAwesomeIcon
                icon={faPlaneDeparture}
                className="text-xl text-[#0270af] mr-2"
              />
              Comprehensive travel solutions
            </span>
            <span className="block text-sm mt-2 text-neutral-500 dark:text-neutral-400">
              We offer everything you need to plan and book your trip, from
              flights and hotels to car rentals and tours.
            </span>
          </li>
          <li className="space-y-2">
            <Badge name="Prices" />
            <span className=" font-semibold flex items-center">
              <FontAwesomeIcon
                icon={faDollarSign}
                className="text-xl text-[#0270af] mr-2"
              />
              Competitive prices
            </span>
            <span className="block text-sm mt-2 text-neutral-500 dark:text-neutral-400">
              We work with our partners to negotiate the best possible prices
              for our customers.
            </span>
          </li>
          <li className="space-y-2">
            <Badge name="Booking" />
            <span className=" font-semibold flex items-center">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="text-xl text-[#0270af] mr-2"
              />
              Flexible booking options
            </span>
            <span className="block text-sm mt-2 text-neutral-500 dark:text-neutral-400">
              We understand that everyone's travel plans are different, so we
              offer a variety of booking options to fit your needs.
            </span>
          </li>
          <li className="space-y-2">
            <Badge name="App" />
            <span className=" font-semibold flex items-center">
              <FontAwesomeIcon
                icon={faMobileAlt}
                className="text-xl text-[#0270af] mr-2"
              />
              Convenient mobile app
            </span>
            <span className="block text-sm mt-2 text-neutral-500 dark:text-neutral-400">
              Our mobile app makes it easy to book and manage your trip on the
              go.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionOurFeatures;
