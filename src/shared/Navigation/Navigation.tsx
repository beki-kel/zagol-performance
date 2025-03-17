"use client";
import React from "react";
import NavigationItem from "./NavigationItem";
import { NAVIGATION_DEMO, NAVIGATION_ALTERNATE } from "@/data/navigation";
import { usePathname } from "next/navigation";

function Navigation() {
  const pathname = usePathname();
  const navigationItems =
    pathname === "/en" || pathname === "/am"
      ? NAVIGATION_DEMO
      : NAVIGATION_ALTERNATE;

  return (
    <ul className="nc-Navigation hidden lg:flex lg:flex-wrap lg:space-x-1 relative">
      {navigationItems.map((item) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
    </ul>
  );
}

export default Navigation;
