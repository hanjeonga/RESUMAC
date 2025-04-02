import React from "react";
import { TextType } from "./Text.type";

const Text = ({ customStyles, value = "", ...props }: TextType) => {
  const baseStyles = "inline-block whitespace-pre-wrap";

  const textAlign = customStyles?.textAlign || "text-left";
  const color = customStyles?.color || "text-black";
  const fontSize = customStyles?.fontSize || "text-[15px]";
  const fontWeight = customStyles?.fontWeight || "font-normal";
  const padding = customStyles?.padding || "p-0";
  const opacity = customStyles?.opacity || "opacity-100";

  const classNames = `${baseStyles} ${textAlign} ${color} ${fontSize} ${fontWeight} ${padding} ${opacity}`;

  return (
    <span className={classNames} {...props}>
      {value}
    </span>
  );
};

export default Text;
