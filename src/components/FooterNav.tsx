"use client";

import {
  HeartIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";
import { PathName } from "@/routers/types";
import MenuBar from "@/shared/MenuBar";
import isInViewport from "@/utils/isInViewport";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeroSearchForm2Mobile from "@/app/[locale]/(client-components)/(HeroSearchForm2Mobile)/HeroSearchForm2Mobile";

// New imports:
import SwitchDarkMode from "@/shared/SwitchDarkMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import ChatSupport from "@/components/chatSupport"; // adjust import as needed

let WIN_PREV_POSITION = 0;
if (typeof window !== "undefined") {
  WIN_PREV_POSITION = window.pageYOffset;
}

interface NavItem {
  name: string;
  link?: PathName;
  icon: any;
}

const NAV: NavItem[] = [
  {
    name: "Chat",
    icon: ({ className }: { className?: string }) => (
      <FontAwesomeIcon icon={faComment} className={`w-6 h-6 ${className}`} />
    ),
  },
  {
    name: "Menu",
    icon: MenuBar,
  },
];

const FooterNav = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const [showChatSupport, setShowChatSupport] = useState(false);

  const handleNavItemClick = (item: NavItem) => {
    if (item.name === "Chat") {
      console.log("Chat icon clicked", item);
      setShowChatSupport(true);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleEvent);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEvent = () => {
    if (typeof window !== "undefined") {
      window.requestAnimationFrame(showHideHeaderMenu);
    }
  };

  const showHideHeaderMenu = () => {
    let currentScrollPos = window.pageYOffset;
    if (!containerRef.current) return;

    if (currentScrollPos > WIN_PREV_POSITION) {
      if (
        isInViewport(containerRef.current) &&
        currentScrollPos - WIN_PREV_POSITION < 80
      ) {
        return;
      }
      containerRef.current.classList.add("FooterNav--hide");
    } else {
      if (
        !isInViewport(containerRef.current) &&
        WIN_PREV_POSITION - currentScrollPos < 80
      ) {
        return;
      }
      containerRef.current.classList.remove("FooterNav--hide");
    }
    WIN_PREV_POSITION = currentScrollPos;
  };

  const renderItem = (item: NavItem, index: number) => {
    const isActive = pathname === item.link;
    return (
      <div
        key={index}
        onClick={() => handleNavItemClick(item)}
        className={`flex flex-col items-center justify-between cursor-pointer text-neutral-500 dark:text-neutral-300/90 ${
          isActive ? "text-neutral-900 dark:text-neutral-100" : ""
        }`}
      >
        <item.icon iconClassName="w-6 h-6" className={``} />
        <span className="text-[11px] leading-none mt-1">{item.name}</span>
      </div>
    );
  };

  return (
    <>
      <div
        ref={containerRef}
        className="FooterNav block md:!hidden p-2 bg-white dark:bg-neutral-800 fixed top-auto bottom-0 inset-x-0 z-30 border-t border-neutral-300 dark:border-neutral-700 
      transition-transform duration-300 ease-in-out"
      >
        <div className="w-full max-w-lg flex justify-around mx-auto text-sm text-center ">
          {/* New: Render SwitchDarkMode within the footer nav */}
          <div className="flex flex-col items-center justify-between text-neutral-500 dark:text-neutral-300/90">
            <SwitchDarkMode />
            <span className="text-[11px] leading-none mt-1">Theme</span>
          </div>
          {/* MENU and other nav items */}
          {NAV.map(renderItem)}
        </div>
      </div>
      {/* Render ChatSupport with mobileVisible and onClose props */}
      {showChatSupport && (
        <ChatSupport
          mobileVisible={showChatSupport}
          onClose={() => setShowChatSupport(false)}
        />
      )}
    </>
  );
};

export default FooterNav;
