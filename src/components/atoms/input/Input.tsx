import React from "react";
import { InputType } from "./Input.type";

const Input = ({ customStyles, ...props }: InputType) => {
  // Tailwind 클래스를 동적으로 생성
  const width = customStyles?.width || "w-full"; // 기본값: 100%
  const height = customStyles?.height || "h-[60px]"; // 기본값: 60px
  const color = customStyles?.color || "text-black"; // 기본값: black
  const fontSize = customStyles?.fontSize || "text-[20px]"; // 기본값: 20px
  const fontWeight = customStyles?.fontWeight || "font-medium"; // 기본값: 500
  const border = customStyles?.border || "border border-neutral-300"; // 기본값: 1px solid #d1d5db
  const borderRadius = customStyles?.borderRadius || "rounded-[5px]"; // 기본값: 5px
  const padding = customStyles?.padding || "px-[25px]"; // 기본값: 0 25px

  // Tailwind 클래스 결합
  const classNames = `${width} ${height} ${color} ${fontSize} ${fontWeight} ${border} ${borderRadius} ${padding}`;

  return <input {...props} className={classNames} />;
};

export default Input;
