import React, { FC } from "react";
import GallerySlider from "@/components/GallerySlider";
import { DEMO_EXPERIENCES_LISTINGS } from "@/data/listings";
import { ExperiencesDataType } from "@/data/types";
import StartRating from "@/components/StartRating";
import BtnLikeIcon from "@/components/BtnLikeIcon";
import SaleOffBadge from "@/components/SaleOffBadge";
import Badge from "@/shared/Badge";
import { Link } from "@/i18n/navigation";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";

export interface ExperiencesCardProps {
  className?: string;
  ratioClass?: string;
  data?: ExperiencesDataType;
  size?: "default" | "small";
}

const DEMO_DATA: ExperiencesDataType = DEMO_EXPERIENCES_LISTINGS[0];

const ExperiencesCard: FC<ExperiencesCardProps> = ({
  size = "default",
  className = "",
  data = DEMO_DATA,
  ratioClass = "aspect-w-3 aspect-h-3",
}) => {
  const { galleryImgs, address, title, saleOff, price, reviewStart, id } = data;

  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || routing.defaultLocale;

  const renderSliderGallery = () => {
    return (
      <div className="relative w-full rounded-2xl overflow-hidden ">
        <GallerySlider
          uniqueID={`ExperiencesCard_${id}`}
          ratioClass={ratioClass}
          galleryImgs={galleryImgs}
        />

        {saleOff && <SaleOffBadge className="absolute left-3 top-3" />}
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className={size === "default" ? "py-4 space-y-3" : "p-3 space-y-1"}>
        <div className="space-y-2 ">
          <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-2 ">
            {size === "default" && (
              <MapPinIcon className="w-4 h-4 text-[#2995D3]" />
            )}
            <span className="">{address}</span>
          </div>

          <div className="flex items-center space-x-2">
            <h2
              className={` font-medium capitalize ${
                size === "default" ? "text-base" : "text-base"
              }`}
            >
              <span className="line-clamp-1">{title}</span>
            </h2>
          </div>
        </div>
        <div className="border-b border-neutral-100 dark:border-neutral-800"></div>
        <div className="flex justify-between items-center">
          <span className="text-base font-semibold text-[#2995D3]">
            {price}
            {` `}
            {size === "default" && (
              <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
                /person
              </span>
            )}
          </span>
          <Link
            locale={pathname.split("/")[1]}
            href="/experience-listings/listing-experiences"
            className="py-1 px-3 rounded-full text-white bg-[#2995d3]"
          >
            Book
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-ExperiencesCard group relative border-b lg:hover:scale-110 ${className}`}
    >
      {renderSliderGallery()}
      <div>{renderContent()}</div>
    </div>
  );
};

export default ExperiencesCard;
