"use client";
import React, { FC } from "react";
import MainNav1 from "./MainNav1";
import { usePathname } from "next/navigation";

export interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className = "" }) => {
  const pathname = usePathname();
  const isRoot = pathname === "/en" || pathname === "/am";

  return (
    <div
      className={`nc-Header  absolute inset-0 py-0 top-0 w-full left-0 right-0 z-40 ${
        isRoot
          ? "nc-header-bg hidden lg:block"
          : " border-b dark:bg-neutral-900/60 backdrop-blur-2xl backdrop-filter "
      } ${className}`}
    >
      <MainNav1 />
    </div>
  );
};

export default Header;
