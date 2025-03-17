"use client";
import { PathName } from "@/routers/types";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { FC, Fragment, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export interface NavItemType {
  id: string;
  name: string;
  isNew?: boolean;
  href: PathName;
  targetBlank?: boolean;
  children?: NavItemType[];

  type?: "dropdown" | "megaMenu" | "none";
}

export interface NavigationItemProps {
  menuItem: NavItemType;
}

const NavigationItem: FC<NavigationItemProps> = ({ menuItem }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isRoot = pathname === "/en" || pathname === "/am";

  const t = useTranslations();
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: PathName
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      router.push(href);
    }
  };

  const renderMainItem = (item: NavItemType) => {
    return (
      <Link
        href={item.href || "/"}
        rel="noopener noreferrer"
        locale={pathname.split("/")[1]}
        className={`inline-flex justify-center items-center hover:border-b-2 transition-all ${
          isRoot
            ? "text-white text-md font-medium hover:border-b-white"
            : "text-neutral-700 dark:text-white text-sm hover:border-b-[#2995D3]"
        }`}
        onClick={(e) => handleScroll(e, item.href)}
      >
        {t(`navigation.${item.name}`)}
      </Link>
    );
  };

  return (
    <li className="menu-item flex items-center px-3 xl:px-5">
      {renderMainItem(menuItem)}
    </li>
  );
};

export default NavigationItem;
