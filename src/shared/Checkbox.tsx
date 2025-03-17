"use client";

import React, { FC } from "react";

export interface CheckboxProps {
  label?: string;
  subLabel?: string;
  className?: string;
  name: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox: FC<CheckboxProps> = ({
  subLabel = "",
  label = "",
  name,
  className = "",
  defaultChecked,
  onChange,
}) => {
  return (
    <div className={`flex text-sm ${className}`}>
      <input
        id={name}
        name={name}
        type="checkbox"
        className={` text-[#28a2e9] border-primary rounded border-[#2995D3] bg-white dark:bg-neutral-700 checked:bg-[#2995D3]  dark:checked:bg-[#2995D3] focus:ring-[#1e77aa] 
          ${className.includes("small") ? "h-4 w-4" : "h-6 w-6"}`}
        defaultChecked={defaultChecked}
        onChange={(e) => onChange && onChange(e.target.checked)}
      />
      {label && (
        <label
          htmlFor={name}
          className="ml-3.5 flex flex-col flex-1 justify-center"
        >
          <span className="w-full text-neutral-900 dark:text-neutral-100">
            {label}
          </span>
          {subLabel && (
            <p className="mt-1 text-neutral-500 dark:text-neutral-400 text-sm font-light">
              {subLabel}
            </p>
          )}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
