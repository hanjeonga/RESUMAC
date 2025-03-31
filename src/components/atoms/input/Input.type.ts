import { CSSProperties } from "react";

export interface InputType extends React.ComponentProps<"input"> {
  customStyles?: Partial<CSSProperties>;
}
