import styled, { css } from "styled-components";

import { Color, Space } from "src/styles";

const primaryButton = css`
  background-color: ${Color.Primary};
  color: ${Color.White};
`;

const normalButton = css`
  background-color: ${Color.Light1};
  border: 1px solid ${Color.Light2};
  color: ${Color.Light9};
`;

export const StyledButton = styled.button<{ type: string }>`
  border: none;
  border-radius: 4px;
  padding: ${Space.px12} ${Space.px16};
  cursor: pointer;

  ${({ type }) => type === "primary" && primaryButton}
  ${({ type }) => type === "normal" && normalButton}
`;
