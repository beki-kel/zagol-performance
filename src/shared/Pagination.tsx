import { CustomLink } from "@/data/types";
import React, { FC } from "react";
import twFocusClass from "@/utils/twFocusClass";
import Link from "next/link";
import { Route } from "@/routers/types";

export interface PaginationProps {
  className?: string;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  className = "",
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderItem = (page: number) => {
    if (page === currentPage) {
      // RETURN ACTIVE PAGINATION
      return (
        <span
          key={page}
          className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-[#2995D3] text-white ${twFocusClass()}`}
        >
          {page}
        </span>
      );
    }
    // RETURN UNACTIVE PAGINATION
    return (
      <button
        key={page}
        className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 ${twFocusClass()}`}
        onClick={() => onPageChange(page)}
      >
        {page}
      </button>
    );
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      className={`nc-Pagination inline-flex space-x-1 text-base font-medium ${className}`}
    >
      {pages.map(renderItem)}
    </nav>
  );
};

export default Pagination;
