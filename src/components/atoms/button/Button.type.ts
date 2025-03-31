import { CSSProperties } from "react";

export interface ButtonType {
  customStyles?: Partial<CSSProperties>;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
