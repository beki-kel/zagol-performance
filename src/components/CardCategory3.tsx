"use client";
import React, { FC } from "react";
import { TaxonomyType } from "@/data/types";
import convertNumbThousand from "@/utils/convertNumbThousand";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { usePathname } from "next/navigation";

export interface CardCategory3Props {
  className?: string;
  taxonomy: TaxonomyType;
}

const CardCategory3: FC<CardCategory3Props> = ({
  className = "",
  taxonomy,
}) => {
  const pathname = usePathname();
  const { count, name, href = "/", thumbnail } = taxonomy;
  return (
    <Link
      href={href}
      locale={pathname.split("/")[1]}
      className={`nc-CardCategory3 flex flex-col ${className}`}
    >
      <div
        className={`flex-shrink-0 relative w-full aspect-w-5 aspect-h-5 sm:aspect-h-6 h-0 rounded-2xl overflow-hidden group`}
      >
        <Image
          src={thumbnail || ""}
          className="object-cover w-full h-full rounded-2xl"
          alt="places"
          fill
          sizes="(max-width: 400px) 100vw, 300px"
        />
        <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-[#2995D3] bg-opacity-40 transition-opacity"></span>
      </div>
      <div className="mt-4 truncate w-full text-center">
        <h2
          className={`text-[#2995D3] text-base sm:text-lg font-medium truncate`}
        >
          {name}
        </h2>
      </div>
    </Link>
  );
};

export default CardCategory3;
