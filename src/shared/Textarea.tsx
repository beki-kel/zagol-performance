import React, { TextareaHTMLAttributes } from "react";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

// eslint-disable-next-line react/display-name
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", children, ...args }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`block w-full text-sm rounded-2xl border-neutral-200 focus:border-[#2995D3] focus:ring focus:ring-[#2995D3] focus:ring-opacity-10 bg-white dark:border-neutral-700 dark:focus:ring-[#2995D3] dark:focus:ring-opacity-10 dark:bg-neutral-900 ${className}`}
        rows={4}
        {...args}
      >
        {children}
      </textarea>
    );
  }
);

export default Textarea;
