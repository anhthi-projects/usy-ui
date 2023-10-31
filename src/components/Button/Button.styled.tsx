import styled, { css } from "styled-components";

import { LoadingCircleIcon } from "@src/components/Icon";
import { Color, Space } from "@src/styles";

import { usyThemeConfig } from "../ThemeConfig";

const { primaryColor, primaryDarkColor, borderRadius } =
  usyThemeConfig.getTheme();

const primaryButton = css`
  background-color: ${primaryColor};
  filter: drop-shadow(0px 4px 0px ${primaryDarkColor});
  color: ${Color.White};
`;

const normalButton = css`
  background-color: ${Color.White};
  border: 1px solid ${Color.Light2};
  filter: drop-shadow(0px 4px 0px ${Color.Light3});
  color: ${Color.Light9};
`;

export const StyledButton = styled.button<{ type: string }>`
  border: none;
  border-radius: ${borderRadius};
  border: 1px solid transparent;
  padding: ${Space.px12} ${Space.px16};
  cursor: pointer;

  ${({ type }) => type === "primary" && primaryButton}
  ${({ type }) => type === "normal" && normalButton}
`;

export const StyledLoadingIcon = styled(LoadingCircleIcon)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  color: ${Color.Light4};
`;

export const StyledButtonContent = styled.div<{ isLoading?: boolean }>`
  visibility: ${({ isLoading }) => (isLoading ? "hidden" : "visible")};
`;
