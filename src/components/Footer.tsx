"use client";

import Logo from "@/shared/Logo";
import Image from "next/image";
import SocialsList1 from "@/shared/SocialsList1";
import { CustomLink } from "@/data/types";
import React from "react";
import FooterNav from "./FooterNav";
import ZagolBlueLogo from "@/images/zagol.png";
import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";
import Abyssinia from "@/images/BankofAbyssinia-logo.png";
import Awash from "@/images/awashbank.png";
import cbebirr from "@/images/cbe_birr_light.png";
import cbe from "@/images/cbe-2.png";
import nibBank from "@/images/nib bank.png";
import telebirr from "@/images/Telebirr.png";
import Zemen from "@/images/zemen bank.png";
import EgyptianAir from "@/images/Egyptair-Logo-2010.svg.png";
import emirates from "@/images/emiarates no back.png";
import Et from "@/images/Ethiopian_Airlines_Logo.svg.png";
import FlyDubai from "@/images/FlyDubaiLogo.png";
import hahnAir from "@/images/Hahn_Air_Logo.avif";
import KenyaAirways from "@/images/KenyaAirwaysLogo.png";
import AirAlgeries from "@/images/Logo_Air_Algérie.svg.png";
import SaudiAir from "@/images/saudia air.png";
import QatarAirways from "@/images/Qatar-Airways-Emblem.png";
import TurkishAirlines from "@/images/Turkish_Airlines.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "5",
    title: "Explore",
    menus: [
      { href: "#aboutUs", label: "About Us" },
      { href: "#FeaturedPackages", label: "Packages" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
  {
    id: "2",
    title: "Find us on",
    menus: [
      { href: "#", label: "Youtube" },
      { href: "#", label: "Facebook" },
      { href: "#", label: "Instagram" },
    ],
  },
  {
    id: "4",
    title: "Our Policies",
    menus: [
      { href: "#", label: "Refund Policy" },
      { href: "#", label: "Code of Conduct" },
      { href: "#", label: "Privacy and security" },
    ],
  },
];

const Footer: React.FC = () => {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || routing.defaultLocale;

  const socialIcons: Record<string, JSX.Element> = {
    Youtube: <FontAwesomeIcon icon={faYoutube} className="inline mr-2" />,
    Facebook: <FontAwesomeIcon icon={faFacebook} className="inline mr-2 " />,
    Instagram: <FontAwesomeIcon icon={faInstagram} className="inline mr-2" />,
  };

  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-[#2995D3] dark:text-neutral-200 text-start">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4 text-start">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <Link
                locale={currentLocale}
                className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
              >
                {menu.id === "2" && socialIcons[item.label]}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // ...rest of the Footer component code

  return (
    <>
      <FooterNav />

      <div className="hidden md:block nc-Footer relative pb-2 pt-10 border-t border-neutral-200 dark:border-neutral-700">
        <div className="hidden md:grid grid-cols-2 gap-t-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-6 lg:gap-x-2">
          <div className="flex flex-col items-center justify-start">
            <Logo img={ZagolBlueLogo} />
          </div>
          {widgetMenus.map(renderWidgetMenuItem)}
          <div className="md:col-span-2 mx-auto px-4 mr-28 text-center text-[#2995d3]">
            <div className="flex justify-center items-center text-sm ">
              <div className=" text-center flex flex-col items-center justify-center">
                <h2 className="mb-2 text-center  text-[#2995D3] dark:text-neutral-200">
                  Payment Methods
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 justify-center items-center mb-8">
                  <Image
                    src={cbebirr}
                    alt="Payment Method 3"
                    className="object-contain ml-5"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={Zemen}
                    alt="Payment Method 7"
                    className="object-contain"
                    width={45}
                    height={45}
                  />{" "}
                  <Image
                    src={telebirr}
                    alt="Payment Method 6"
                    className=""
                    width={45}
                    height={45}
                  />
                  <Image
                    src={cbe}
                    alt="Payment Method 4"
                    className="-ml-5"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={Awash}
                    alt="Payment Method 2"
                    className="object-contain ml-3"
                    width={80}
                    height={80}
                  />
                  <Image
                    src={nibBank}
                    alt="Payment Method 5"
                    className="object-contain "
                    width={80}
                    height={80}
                  />
                  <Image
                    src={Abyssinia}
                    alt="Payment Method 1"
                    className="object-contain -ml-3"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="flex justify-center items-center text-sm mb-6">
                  <div className=" text-center flex flex-col items-center justify-center">
                    <h2 className="mb-2 text-center  text-[#2995D3] dark:text-neutral-200">
                      Our Partners
                    </h2>
                    <div className="grid grid-cols-2 gap-x-5  sm:grid-cols-5 justify-center items-center">
                      <Image
                        src={EgyptianAir}
                        alt="Payment Method 3"
                        className="object-contain"
                        width={65}
                        height={40}
                      />
                      <Image
                        src={Et}
                        alt="Payment Method 7"
                        className="object-contain"
                        width={65}
                        height={40}
                      />{" "}
                      <Image
                        src={FlyDubai}
                        alt="Payment Method 6"
                        className=""
                        width={65}
                        height={40}
                      />
                      <Image
                        src={hahnAir}
                        alt="Payment Method 4"
                        className=""
                        width={65}
                        height={40}
                      />
                      <Image
                        src={emirates}
                        alt="Payment Method 4"
                        className=""
                        width={65}
                        height={50}
                      />
                      <Image
                        src={KenyaAirways}
                        alt="Payment Method 4"
                        className=""
                        width={65}
                        height={40}
                      />
                      <Image
                        src={AirAlgeries}
                        alt="Payment Method 3"
                        className="object-contain "
                        width={65}
                        height={40}
                      />
                      <Image
                        src={TurkishAirlines}
                        alt="Payment Method 4"
                        className=""
                        width={65}
                        height={40}
                      />{" "}
                      <Image
                        src={QatarAirways}
                        alt="Payment Method 6"
                        className=""
                        width={65}
                        height={40}
                      />
                      <Image
                        src={SaudiAir}
                        alt="Payment Method 7"
                        className="object-contain"
                        width={65}
                        height={40}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
