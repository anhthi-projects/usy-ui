import styled, { css } from "styled-components";

import { Color, FontSize, Space } from "@src/styles";

export const CheckboxLabel = styled.label`
  font-size: ${FontSize.Sm};
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

export const CheckboxInput = styled.input<{ checked?: boolean }>`
  ${({ theme, checked }) => css`
    -webkit-appearance: none;
    appearance: none;
    width: ${Space.px20};
    height: ${Space.px20};
    position: relative;
    background-color: ${checked ? theme.primaryColor : Color.White};
    border: 2px solid ${checked ? theme.primaryColor : Color.Light4};
    border-radius: 2px;
    margin-right: ${Space.px8};
    outline: none;
    user-select: none;
    cursor: pointer;

    &::before {
      content: "✓";
      font-size: ${FontSize.Xs};
      color: ${Color.White};
      position: absolute;
      right: 3px;
      top: -1px;
    }
  `}
`;
