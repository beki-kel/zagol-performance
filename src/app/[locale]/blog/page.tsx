"use client";

import React, { FC, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Header from "../(client-components)/(Header)/Header";

export interface ListingAttractionDetailPageProps {
  id: string;
  title: string;
  description: string;
  photos: string[];
  details: {
    openingHours: string;
    bestTimeToVisit: string;
    entryFee: string;
    location: string;
    contact: string;
  };
}

const DEMO_ATTRACTIONS: ListingAttractionDetailPageProps[] = [
  {
    id: "1",
    title: "Statue of Liberty",
    description:
      "The Statue of Liberty is not merely a monumental sculpture; it is a profound emblem of hope, freedom, and opportunity. Standing tall on Liberty Island in New York Harbor, this magnificent gift from France, erected in 1886, welcomes millions of visitors each year. As you approach, you'll be captivated by its grandeur and the powerful symbolism of liberty it represents. Wander through the informative museum that chronicles its storied past, and for those with adventurous spirits, climb up to the pedestal or crown to take in breathtaking panoramic views of Manhattan and the harbor. This landmark promises an unforgettable experience, inviting travelers to reflect on the ideals of democracy and the historical journey of immigrants seeking a new life.",
    photos: [
      "https://images.pexels.com/photos/4666852/pexels-photo-4666852.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/760035/pexels-photo-760035.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260", // Additional image related to the monument
    ],
    details: {
      openingHours: "8:30 AM - 4:00 PM",
      bestTimeToVisit: "Spring and Fall",
      entryFee: "$18.50",
      location: "Liberty Island, New York, NY 10004, USA",
      contact: "+1 212-363-3200",
    },
  },
  {
    id: "2",
    title: "Marina Bay Sands",
    description:
      "Marina Bay Sands is an architectural masterpiece and one of Singapore's most glamorous attractions. This integrated resort dazzles with its futuristic design, most famously showcased by the awe-inspiring infinity pool that seemingly floats above the bustling cityscape. A visit here is not just about luxury accommodations but also about experiencing an all-encompassing lifestyle: from world-class dining and upscale shopping to vibrant entertainment and a thrilling casino. The SkyPark, perched atop the three soaring towers, offers spectacular 360-degree views of Singapore's glittering skyline, especially enchanting at dusk when the city lights start to sparkle. Whether you're there to indulge in a lavish getaway or to marvel at the innovative design, Marina Bay Sands promises a truly immersive experience.",
    photos: [
      "https://images.pexels.com/photos/534383/pexels-photo-534383.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/1005419/pexels-photo-1005419.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/3560163/pexels-photo-3560163.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/4112277/pexels-photo-4112277.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/2828937/pexels-photo-2828937.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260", // Additional shot showcasing the resort's skyline
    ],

    details: {
      openingHours: "24 Hours",
      bestTimeToVisit: "Evening",
      entryFee: "Free",
      location: "10 Bayfront Ave, Singapore 018956",
      contact: "+65 6688 8888",
    },
  },
  {
    id: "3",
    title: "Eiffel Tower",
    description:
      "The Eiffel Tower is an enduring icon of French art, innovation, and elegance. Constructed for the 1889 Exposition Universelle, it has grown to symbolize not only Paris but also the spirit of artistic and engineering ingenuity. Visitors can ascend its multiple levels to enjoy panoramic vistas of the City of Light, where every angle offers a new perspective of Paris’s historic boulevards, charming streets, and scenic riverbanks. Whether experiencing its majesty under a bright blue sky or when the tower is illuminated by thousands of twinkling lights at night, the Eiffel Tower remains a mesmerizing testament to the blend of beauty, history, and culture that defines France.",
    photos: [
      "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/416469/pexels-photo-416469.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/374775/pexels-photo-374775.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/358443/pexels-photo-358443.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260", // Extra image emphasizing its panoramic views
    ],

    details: {
      openingHours: "9:00 AM - 12:45 AM",
      bestTimeToVisit: "Evening",
      entryFee: "€25.90",
      location: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
      contact: "+33 892 70 12 39",
    },
  },
  {
    id: "4",
    title: "Big Ben",
    description:
      "Big Ben, the nickname for the Great Bell housed within the clock tower at the Palace of Westminster, stands as a proud symbol of British heritage and punctuality. This landmark has been witnessing the ebb and flow of British history for over a century. As you stand before it, the majestic chimes and imposing architecture evoke a sense of tradition and enduring elegance. While the tower itself is not always accessible to the public, the surrounding area is steeped in historical ambiance, inviting visitors to stroll along the Thames, explore nearby monuments, and imagine the rich tapestry of events that have shaped modern Britain. Big Ben is more than a clock—it is a living piece of history that continues to inspire awe and reverence",
    photos: [
      "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/164338/pexels-photo-164338.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/213893/pexels-photo-213893.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260", // Additional image highlighting the clock tower
    ],

    details: {
      openingHours: "24 Hours",
      bestTimeToVisit: "Anytime",
      entryFee: "Free",
      location: "Westminster, London SW1A 0AA, United Kingdom",
      contact: "+44 20 7219 4272",
    },
  },
  {
    id: "5",
    title: "Tokyo Tower",
    description:
      "Tokyo Tower rises as a beacon of modernity and tradition in the heart of Japan’s vibrant capital. Modeled after Paris's Eiffel Tower, it uniquely blends Western architectural influence with Japanese aesthetics. Standing tall with its vivid red and white structure, the tower offers sweeping views of Tokyo’s dynamic urban landscape—from the sprawling metropolis to serene, historic neighborhoods. At night, its brilliant illumination transforms the city into a sparkling wonderland. Beyond its role as an observation tower and communications hub, Tokyo Tower is a cultural icon that reflects Japan's post-war revival, innovative spirit, and the harmonious coexistence of old and new. It provides a fascinating destination for anyone eager to explore Tokyo’s multifaceted identity.",
    photos: [
      "https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/1190219/pexels-photo-1190219.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260", // Extra image capturing Tokyo Tower's nighttime illumination
    ],

    details: {
      openingHours: "9:00 AM - 11:00 PM",
      bestTimeToVisit: "Evening",
      entryFee: "¥1200",
      location: "4 Chome-2-8 Shibakoen, Minato City, Tokyo 105-0011, Japan",
      contact: "+81 3-3433-5111",
    },
  },
  {
    id: "6",
    title: "Maldives Beach",
    description:
      "The Maldives Beach is the epitome of tropical paradise—a serene retreat characterized by powdery white sands, crystal-clear turquoise waters, and a vibrant underwater world. This idyllic destination is a haven for sun-seekers, water sports enthusiasts, and those looking to disconnect from the everyday hustle. Imagine spending your days snorkeling among colorful coral reefs, diving into the depths to witness an array of marine life, or simply unwinding in a luxurious overwater bungalow with unobstructed views of endless blue horizons. The Maldives offers an immersive escape where nature’s beauty meets refined tranquility, ensuring every moment spent here feels like a rejuvenating journey into paradise.",
    photos: [
      "https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/1450356/pexels-photo-1450356.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260", // Additional image showcasing the beach and ocean vibe
    ],

    details: {
      openingHours: "24 Hours",
      bestTimeToVisit: "November to April",
      entryFee: "Free",
      location: "Maldives",
      contact: "+960 123-4567",
    },
  },
  {
    id: "7",
    title: "Colosseum",
    description:
      "The Colosseum is a monumental testament to the architectural brilliance and cultural legacy of ancient Rome. Once the epicenter of gladiatorial combat, public spectacles, and theatrical performances, this grand amphitheater now stands as a silent storyteller of a bygone era. As you wander among its ancient ruins, you can almost hear echoes of the roaring crowds and the intense drama that unfolded within its walls. Beyond its sheer historical importance, the Colosseum also offers insights into the ingenuity and resourcefulness of Roman engineering. For travelers and history enthusiasts alike, a visit to the Colosseum is a journey back in time—a chance to immerse oneself in the rich tapestry of Rome’s illustrious past.",
    photos: [
      "https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/1051072/pexels-photo-1051072.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/209150/pexels-photo-209150.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260",
      "https://images.pexels.com/photos/221148/pexels-photo-221148.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260", // Extra image focusing on the amphitheater's exterior details
    ],

    details: {
      openingHours: "8:30 AM - 7:00 PM",
      bestTimeToVisit: "Spring and Fall",
      entryFee: "€16",
      location: "Piazza del Colosseo, 1, 00184 Roma RM, Italy",
      contact: "+39 06 3996 7700",
    },
  },
];

const ListingAttractionDetailPage: FC = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [attraction, setAttraction] =
    useState<ListingAttractionDetailPageProps | null>(null);

  useEffect(() => {
    if (id) {
      const foundAttraction = DEMO_ATTRACTIONS.find((item) => item.id === id);
      setAttraction(foundAttraction || null);
    }
  }, [id]);

  if (!attraction) {
    return <div>Loading...</div>;
  }

  const { title, description, photos, details } = attraction;

  const renderSection4 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <div>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            {description}
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* CONTENT */}
        <div className="flow-root">
          <div className="text-sm sm:text-base text-neutral-6000 dark:text-neutral-300 -mb-4">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 flex justify-between items-center space-x-4 rounded-lg">
              <span>Opening Hours</span>
              <span>{details.openingHours}</span>
            </div>
            <div className="p-4 flex justify-between items-center space-x-4 rounded-lg">
              <span>Best Time to Visit</span>
              <span>{details.bestTimeToVisit}</span>
            </div>
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 flex justify-between items-center space-x-4 rounded-lg">
              <span>Entry Fee</span>
              <span>{details.entryFee}</span>
            </div>
            <div className="p-4 flex justify-between items-center space-x-4 rounded-lg">
              <span>Location</span>
              <span>{details.location}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      <Header className="h-12 sticky z-50" />
      <div className="nc-ListingAttractionDetailPage lg:pb-20 container">
        {/*  HEADER */}
        <header className="rounded-md sm:rounded-xl mt-6">
          <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">
            <div className="col-span-2 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer">
              <Image
                fill
                className="object-cover rounded-md sm:rounded-xl"
                src={photos[0]}
                alt=""
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
              <div className="absolute inset-0 bg-[#2995D3] bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
            </div>
            {photos
              .filter((_, i) => i >= 1 && i < 5)
              .map((item, index) => (
                <div
                  key={index}
                  className={`relative rounded-md sm:rounded-xl overflow-hidden ${
                    index >= 3 ? "hidden sm:block" : ""
                  }`}
                >
                  <div className="aspect-w-4 aspect-h-3 sm:aspect-w-6 sm:aspect-h-5">
                    <Image
                      fill
                      className="object-cover rounded-md sm:rounded-xl "
                      src={item || ""}
                      alt=""
                      sizes="400px"
                    />
                  </div>

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-[#2995D3] bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity cursor-pointer" />
                </div>
              ))}
          </div>
        </header>

        <main className=" relative z-10 mt-11 w-full">
          <div className="w-full space-y-8 lg:space-y-10 lg:pr-10 mb-10">
            {renderSection4()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ListingAttractionDetailPage;
