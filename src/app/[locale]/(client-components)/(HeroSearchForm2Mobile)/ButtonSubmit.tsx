import React, { FC } from "react";
import { PathName } from "@/routers/types";
import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";
interface Props {
  className?: string;
  onClick?: () => void;
  href?: PathName;
}
const ButtonSubmit: FC<Props> = ({
  className = "",
  onClick = () => {},
  href = "/stay-listings/listing-stay",
}) => {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || routing.defaultLocale;

  return (
    <Link
      href={href}
      locale={currentLocale}
      className={`flex-shrink-0 px-4 py-2.5 cursor-pointer rounded-xl bg-[#1f88c5] flex items-center justify-center text-neutral-50 focus:outline-none ${className} relative z-20`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
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
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <span className="ml-2">Search</span>
    </Link>
  );
};

export default ButtonSubmit;
