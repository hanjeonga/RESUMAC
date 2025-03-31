import styled from "styled-components";
import { InputType } from "./Input.type";

export const StyleInput = styled.input<InputType>`
  ${({ $customStyles: customStyles, theme }) => `
      width: ${customStyles?.width || "100%"};
      height: ${customStyles?.height || "60px"};
      color: ${customStyles?.color || theme.palette.grayscale.black};
      font-size: ${customStyles?.fontSize || theme.fontSize[20]};
      font-weight: ${customStyles?.fontWeight || theme.fontWeight[500]};
      border: ${
        customStyles?.border ||
        `1px solid ${theme.palette.grayscale.neutral_300}`
      };
      border-radius: ${customStyles?.borderRadius || "5px"};
      padding: ${customStyles?.padding || "0 25px"};

      &::placeholder {
      color: ${theme.palette.grayscale.neutral_300};
      font-family: Pretendard;
  }
  `}
`;
