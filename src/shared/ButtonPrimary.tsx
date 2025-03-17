import Button, { ButtonProps } from "./Button";
import React from "react";

export interface ButtonPrimaryProps extends ButtonProps {}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  className = "",
  ...args
}) => {
  return (
    <Button
      className={`ttnc-ButtonPrimary disabled:bg-opacity-60 bg-[#2995D3] hover:bg-opacity-80 text-neutral-50 ${className}`}
      {...args}
    />
  );
};
0;
export default ButtonPrimary;
