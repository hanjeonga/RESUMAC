import React from "react";
import { ButtonType } from "./Button.type";

type ButtonProps = { withIcon?: boolean } & ButtonType;

const Button = ({
  children,
  withIcon,
  customStyles,
  ...props
}: ButtonProps) => {
  const baseStyles = "flex justify-center items-center";
  const width = customStyles?.width || "w-[95px]";
  const height = customStyles?.height || "h-[44px]";
  const color = customStyles?.color || "text-black";
  const bgColor = customStyles?.backgroundColor || "bg-white";
  const border = customStyles?.border || "border border-neutral-300";
  const borderRadius = customStyles?.borderRadius || "rounded-[5px]";
  const fontSize = customStyles?.fontSize || "text-[14px]";
  const fontWeight = customStyles?.fontWeight || "font-bold";
  const padding = customStyles?.padding || "p-0";
  const opacity = customStyles?.opacity || "opacity-100";
  const transition =
    customStyles?.transition || "transition-all duration-200 ease-in-out";

  const classNames = `${baseStyles} ${width} ${height} ${color} ${bgColor} ${border} ${borderRadius} ${fontSize} ${fontWeight} ${padding} ${opacity} ${transition} ${
    withIcon ? "gap-2" : ""
  }`;

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};

export default Button;
