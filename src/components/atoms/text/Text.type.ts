import { CSSProperties } from "react";

export interface TextType extends React.HTMLProps<HTMLSpanElement> {
  customStyles?: Partial<CSSProperties>;
}
