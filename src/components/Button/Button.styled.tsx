import styled, { css } from "styled-components";

import { CircleLoadingIcon } from "@src/components/Icon";
import { Color, Space } from "@src/styles";

const primaryButton = css`
  background-color: ${Color.Primary};
  color: ${Color.White};
`;

const normalButton = css`
  background-color: ${Color.White};
  border: 1px solid ${Color.Light2};
  color: ${Color.Light9};
`;

export const StyledButton = styled.button<{ type: string }>`
  border: none;
  border-radius: 4px;
  border: 1px solid transparent;
  padding: ${Space.px12} ${Space.px16};
  filter: drop-shadow(0px 4px 0px ${Color.Light3});
  cursor: pointer;

  ${({ type }) => type === "primary" && primaryButton}
  ${({ type }) => type === "normal" && normalButton}
`;

export const StyledLoadingIcon = styled(CircleLoadingIcon)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  color: ${Color.Light4};
`;

export const StyledButtonContent = styled.div<{ isLoading?: boolean }>`
  visibility: ${({ isLoading }) => (isLoading ? "hidden" : "visible")};
`;
