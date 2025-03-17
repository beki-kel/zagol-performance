"use client";

import React, { FC, useEffect, useState, ReactNode } from "react";
import Heading from "@/shared/Heading";
import Nav from "@/shared/Nav";
import NavItem from "@/shared/NavItem";
import ButtonSecondary from "@/shared/ButtonSecondary";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import ButtonPrimary from "@/shared/ButtonPrimary";
import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";

export interface HeaderFilterProps {
  tabActive?: string;
  tabs?: string[];
  heading: ReactNode;
  subHeading?: ReactNode;
  onClickTab?: (item: string) => void;
}

const HeaderFilter: FC<HeaderFilterProps> = ({
  tabActive,
  subHeading = "Discover Zagol's Packages: Combining flights, hotels, and activities into one comprehensive travel solution designed to simplify your vacation planning. ",
  heading = "Latest Articles 🎈",
  onClickTab = () => {},
}) => {
  const [tabActiveState, setTabActiveState] = useState(tabActive);

  useEffect(() => {
    setTabActiveState(tabActive);
  }, [tabActive]);

  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || routing.defaultLocale;

  return (
    <div className="flex items-start relative">
      <Heading desc={subHeading}>{heading}</Heading>
      <div className="ml-auto">
        <span className="flex-shrink-0">
          <Link
            locale={currentLocale}
            href="/experience-listings/listing-experiences"
            className="!leading-none border-[#2995D3]"
          >
            <div className="flex items-center justify-center hover:scale-105 pb-1 border-b hover:text-[#2995D3]">
              <p> more</p>
              <span className=" hover:text-[#2995D3] hover:scale-105 ">
                <ArrowRightIcon className="w-4 h-4 ml-2 hidden sm:block" />
              </span>
            </div>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default HeaderFilter;
