"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from "framer-motion";
import Image, { StaticImageData } from "next/image";

export interface Partner {
  id: string;
  name: string;
  logo: StaticImageData;
  height?: number;
  width?: number;
}

interface SectionOurPartnersProps {
  partners: Partner[];
}

const SectionOurPartners: React.FC<SectionOurPartnersProps> = ({
  partners,
}) => {
  return (
    <div className="w-full text-slate-950 dark:text-neutral-200 overflow-hidden">
      <h2 className="w-full text-center pt-12 text-xl font-semibold">
        Our Partners
      </h2>
      <div className="pt-12 flex items-center justify-center overflow-hidden">
        <InfiniteScrolling>
          {partners.map((partner, id) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center min-w-[40%] "
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.width || 200}
                height={partner.height || 200}
                className="hover:scale-110 transition-transform p-4"
              />
            </div>
          ))}
        </InfiniteScrolling>
      </div>
    </div>
  );
};

interface InfiniteScrollingProps {
  children: React.ReactNode;
}

const InfiniteScrolling: React.FC<InfiniteScrollingProps> = ({ children }) => {
  // Adjust child duplication to assign unique keys for duplicates
  const contentArray = React.Children.toArray(children) as React.ReactElement[];
  const duplicatedContent = [
    ...contentArray,
    ...contentArray.map((child, index) =>
      React.cloneElement(child, { key: `dup-${child.key ?? index}` })
    ),
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const x = useMotionValue(0);

  // Measure the width of one set of content (half the total width)
  useEffect(() => {
    if (containerRef.current) {
      // total scrollable width is the scrollWidth of the inner container.
      // Since we have two copies, the wrap range is half the total width.
      setContentWidth(containerRef.current.scrollWidth / 2);
    }
  }, [duplicatedContent]);

  // Helper to wrap value between min and max
  const wrap = (min: number, max: number, value: number) => {
    const range = max - min;
    return ((((value - min) % range) + range) % range) + min;
  };

  // Use animation frame to update x continuously in px
  useAnimationFrame((_, delta) => {
    // Adjust speed (pixels per second); negative for leftward scrolling
    const speed = -100;
    const moveBy = speed * (delta / 1000);
    // Increase the motion value continuously
    x.set(x.get() + moveBy);
  });

  // Use transform to wrap the x value in a smooth loop
  const wrappedX = useTransform(x, (value) =>
    // When contentWidth is measured, wrap between -contentWidth and 0
    contentWidth ? wrap(-contentWidth, 0, value) : 0
  );

  return (
    <div className="overflow-hidden">
      <motion.div ref={containerRef} className="flex" style={{ x: wrappedX }}>
        {duplicatedContent}
      </motion.div>
    </div>
  );
};

export default SectionOurPartners;
