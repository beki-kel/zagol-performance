import __stayListing from "./jsons/__stayListing.json";
import __carsListing from "./jsons/__carsListing.json";
import __experiencesListing from "./jsons/__experiencesListing.json";
import {
  DEMO_STAY_CATEGORIES,
  DEMO_EXPERIENCES_CATEGORIES,
} from "./taxonomies";
import { CarDataType, ExperiencesDataType, StayDataType } from "./types";


import { Route } from "@/routers/types";

const DEMO_STAY_LISTINGS = __stayListing.map((post, index): StayDataType => {
  //  ##########  GET CATEGORY BY CAT ID ######## //
  const category = DEMO_STAY_CATEGORIES.filter(
    (taxonomy) => taxonomy.id === post.listingCategoryId
  )[0];

  return {
    ...post,
    id: `stayListing_${index}_`,
    saleOff: !index ? "-20% today" : post.saleOff,
    isAds: !index ? true : post.isAds,
    listingCategory: category,
    href: post.href as Route,
  };
});

const DEMO_EXPERIENCES_LISTINGS = __experiencesListing.map(
  (post, index): ExperiencesDataType => {
    //  ##########  GET CATEGORY BY CAT ID ######## //
    const category = DEMO_EXPERIENCES_CATEGORIES.filter(
      (taxonomy) => taxonomy.id === post.listingCategoryId
    )[0];

    return {
      ...post,
      id: `experiencesListing_${index}_`,
      saleOff: !index ? "-20% today" : post.saleOff,
      isAds: !index ? true : post.isAds,

      listingCategory: category,
      href: post.href as Route,
      location: post.location,
    };
  }
);

export { DEMO_STAY_LISTINGS, DEMO_EXPERIENCES_LISTINGS };
