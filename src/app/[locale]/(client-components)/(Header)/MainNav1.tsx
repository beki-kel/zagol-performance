import React, { FC, useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import Logo from "@/shared/Logo";
import Navigation from "@/shared/Navigation/Navigation";
import { ArrowDownTrayIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import HeroSearchForm2MobileFactory from "../(HeroSearchForm2Mobile)/HeroSearchForm2MobileFactory";
import ZagolBlueLogo from "@/images/zagol.png";
import { useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import HeaderForMobile from "./HeaderForMobile";
import MenuBar from "@/shared/MenuBar";

export interface MainNav1Props {
  className?: string;
}

const MainNav1: FC<MainNav1Props> = ({ className = "" }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentLocale = pathname.split("/")[1] || routing.defaultLocale;
  const isRoot = pathname === "/en" || pathname === "/am";

  const changeLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    const pathnameWithoutLocale = segments.slice(2).join("/");

    const query = searchParams.toString();
    router.push(
      `/${newLocale}/${pathnameWithoutLocale}${query ? `?${query}` : ""}`
    );
  };

  const t = useTranslations();

  return (
    <div className={`nc-MainNav1 relative z-10 ${className}`}>
      {/* Mobile */}
      {isRoot ? (
        ""
      ) : (
        <div className="lg:hidden relative mb-3">
          <div className="flex  justify-center items-center lg:hidden w-[100vw] z-10 px-4 mb-10 pt-2">
            <div className="flex justify-start items-center w-[40%] ">
              <Logo
                className="w-8 h-8 flex items-center "
                img={ZagolBlueLogo}
              />
            </div>
            <div
              className={`flex justify-end items-start text-sm  hover:transition-all w-[60%]`}
            >
              <MenuBar iconClassName="h-6 w-6 text-black dark:text-white" />
            </div>
          </div>
        </div>
      )}
      <div
        className={`hidden  xl:px-14 md:pr-5 md:pl-5 lg:flex justify-between items-center ${
          isRoot ? "h-20" : "h-10 xl:py-1"
        }`}
      >
        {/* Left side */}
        <div className="hidden lg:flex justify-center lg:justify-start lg:flex-1 lg:space-x-10">
          {isRoot ? (
            <Logo className="lg:w-24 w-32 lg:self-center" />
          ) : (
            <Logo
              className="w-8 h-8 lg:self-center"
              img={ZagolBlueLogo}
              imgLight={ZagolBlueLogo}
            />
          )}
          <div
            className={`hidden w-full lg:flex ${
              isRoot ? "justify-center" : "justify-center"
            }`}
          >
            <Navigation />
          </div>
        </div>

        {/* Desktop */}
        <div
          className={`hidden lg:flex items-center text-sm text-white hover:transition-all`}
        >
          <LanguageSwitcher />
        </div>

        {/* Right side (dark mode & download button) */}
        <div className="hidden lg:flex flex-shrink-0 justify-center flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100 pl-6"></div>
        <div className="hidden xl:block border-l px-4 my-6">
          <Link
            href="/home/home-2"
            className="flex items-center text-sm bg-white px-2 py-1 rounded-3xl dark:hover:bg-opacity-60 hover:border-white hover:transition-all shadow-md border"
            locale={currentLocale}
          >
            <ArrowDownTrayIcon className="h-4 w-4 mr-2 text-[#2995D3]" />
            <p className="text-xs font-extralight text-neutral-900">
              {t(`downloadAppButton.name`)}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainNav1;
