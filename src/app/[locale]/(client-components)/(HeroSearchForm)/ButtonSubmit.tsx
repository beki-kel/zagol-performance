"use client";
import { PathName } from "@/routers/types";
import { Link } from "@/i18n/navigation";
import React, { FC } from "react";
import { usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";

interface Props {
  href?: PathName;
}

const ButtonSubmit: FC<Props> = ({ href = "/stay-listings/listing-stay" }) => {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || routing.defaultLocale;

  return (
    <Link
      href={href}
      locale={currentLocale}
      className="h-14 md:h-16 w-full md:w-16 rounded-full bg-[#2995D3] hover:bg-opacity-80 flex items-center justify-center text-neutral-50 focus:outline-none"
    >
      <span className="mr-3 md:hidden">Search</span>
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
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </Link>
  );
};

export default ButtonSubmit;
