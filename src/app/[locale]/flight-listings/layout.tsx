import BackgroundSection from "@/components/BackgroundSection";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import SectionGridAuthorBox from "@/components/SectionGridAuthorBox";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import React, { ReactNode } from "react";
import SectionHeroArchivePage from "../(server-components)/SectionHeroArchivePage";
import Header from "../(client-components)/(Header)/Header";
import FlightSearchForm from "../(client-components)/(HeroSearchForm)/(flight-search-form)/FlightSearchForm";
import ChatSupport from "@/components/chatSupport";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`nc-ListingStayPage relative `}>
      <Header className="h-12 sticky z-50" />
      {/* SECTION HERO */}
      <div className="hidden lg:block relative flight-search-back h-[45vh] rounded-b-[3rem]">
        <span className="hidden sm:block h-fulll absolute inset-0 bg-[#2995D3] bg-opacity-60 transition-opacity rounded-b-[3rem]"></span>
      </div>
      <div className="hidden lg:block container relative xl:px-24 pb-10 -mt-32">
        <FlightSearchForm />
      </div>

      {children}
      <ChatSupport />
    </div>
  );
};

export default Layout;
