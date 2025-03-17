"use client";

import React from "react";
import { MoonIcon } from "@heroicons/react/24/solid";
import { SunIcon } from "@heroicons/react/24/outline";
import { useThemeMode } from "@/utils/useThemeMode";
import { usePathname } from "next/navigation";
export interface SwitchDarkModeProps {
  className?: string;
}
const SwitchDarkMode: React.FC<SwitchDarkModeProps> = ({ className = "" }) => {
  const { _toogleDarkMode, isDarkMode, toDark, toLight } = useThemeMode();
  const pathname = usePathname();
  const isRoot = pathname === "/en" || pathname === "/am";

  return (
    <>
      <div
        className={"hidden lg:block w-20 h-20 fixed bottom-24 right-2 z-[1100]"}
      >
        <button
          onClick={_toogleDarkMode}
          className={
            "w-14 h-14 p-2 bg-[#036ca8] rounded-full flex items-center justify-center shadow-lg focus:outline-none"
          }
        >
          <span className="sr-only">Enable dark mode</span>
          {isDarkMode ? (
            <MoonIcon className="text-white" aria-hidden="true" />
          ) : (
            <SunIcon className="text-white " aria-hidden="true" />
          )}
        </button>
      </div>
      {/*mobile*/}
      <div className={"lg:hidden  flex items-center justify-center"}>
        <button
          onClick={_toogleDarkMode}
          className={"flex items-center justify-center focus:outline-none"}
        >
          <span className="sr-only">Enable dark mode</span>
          {isDarkMode ? (
            <MoonIcon className=" w-7 h-7" aria-hidden="true" />
          ) : (
            <SunIcon className=" w-8 h-8" aria-hidden="true" />
          )}
        </button>
      </div>
    </>
  );
};

export default SwitchDarkMode;
