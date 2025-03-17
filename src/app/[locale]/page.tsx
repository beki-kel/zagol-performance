import React from "react";
import SectionHero from "@/app/[locale]/(server-components)/SectionHero";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import { TaxonomyType } from "@/data/types";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionOurFeatures from "@/components/SectionOurFeatures";
import BackgroundSection from "@/components/BackgroundSection";
import SectionGridFeaturePlaces from "@/components/SectionGridFeaturePlaces";
import SectionHowItWork from "@/components/SectionHowItWork";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import SectionGridCategoryBox from "@/components/SectionGridCategoryBox";
import SectionVideos from "@/components/SectionVideos";
import SectionClientSay from "@/components/SectionClientSay";
import Header from "./(client-components)/(Header)/Header";
import PARTNERS from "@/data/partners";
import SectionOurPartners from "@/components/sectionOurPartners";

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/blog?id=1",
    name: "New Yourk",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "2",
    href: "/blog?id=2",
    name: "Singapore",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/blog?id=3",
    name: "Paris",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/blog?id=4",
    name: "London",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "5",
    href: "/blog?id=5",
    name: "Tokyo",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "6",
    href: "/blog?id=6",
    name: "Maldives",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "7",
    href: "/blog?id=7",
    name: "Italy",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

function PageHome() {
  return (
    <main className="nc-PageHome relative overflow-hidden">
      <Header className="h-20" />
      <div className="relative space-y-24 mb-12 lg:space-y-28 lg:mb-14">
        <SectionHero />
      </div>

      <div className="container relative mb-24 space-y-10 lg:space-y-28 lg:mb-28">
        <div className="hidden lg:block">
          <SectionSliderNewCategories categories={DEMO_CATS} />
        </div>
        <div id="FeaturedPackages" className="scroll-mt-24">
          <SectionGridFeaturePlaces />
        </div>
        <div className="lg:hidden block mt-96">
          <SectionSliderNewCategories categories={DEMO_CATS} />
        </div>

        <div id="aboutUs" className="scroll-mt-20">
          <SectionOurFeatures />
        </div>

        <SectionVideos />
        <div className="lg:hidden">
          <SectionOurPartners partners={PARTNERS} />
        </div>
      </div>
    </main>
  );
}

export default PageHome;
