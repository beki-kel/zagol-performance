import { NavItemType } from "@/shared/Navigation/NavigationItem";
import ncNanoId from "@/utils/ncNanoId";

export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/flight-listings/listing-flights",
    name: "Flights",
    type: "none",
  },
  {
    id: ncNanoId(),
    href: "#FeaturedPackages",
    name: "Packages",
    type: "none",
  },
  {
    id: ncNanoId(),
    href: "/stay-listings/listing-stay",
    name: "Hotels",
    type: "none",
  },

  {
    id: ncNanoId(),
    href: "/stay-listings/listing-stay",
    name: "Flight + Hotel",
    type: "none",
  },

  {
    id: ncNanoId(),
    href: "/contact",
    name: "Contact Us",
    type: "none",
  },
];

export const NAVIGATION_MOBILE: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
    type: "none",
  },
  {
    id: ncNanoId(),
    href: "/experience-listings/listing-experiences",
    name: "Packages",
    type: "none",
  },
  {
    id: ncNanoId(),
    href: "/contact",
    name: "Contact Us",
    type: "none",
  },
];

export const NAVIGATION_ALTERNATE: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
    type: "none",
  },
  {
    id: ncNanoId(),
    href: "/flight-listings/listing-flights",
    name: "Flights",
    type: "none",
  },
  {
    id: ncNanoId(),
    href: "/stay-listings/listing-stay",
    name: "Hotels",
    type: "none",
  },

  {
    id: ncNanoId(),
    href: "/experience-listings/listing-experiences",
    name: "Packages",
    type: "none",
  },
  {
    id: ncNanoId(),
    href: "/stay-listings/listing-stay",
    name: "Flight + Hotel",
    type: "none",
  },
];
