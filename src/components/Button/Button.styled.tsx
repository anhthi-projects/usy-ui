import styled, { css } from "styled-components";

import { LoadingCircleIcon } from "@src/components/Icon";
import { Color, Space } from "@src/styles";

import { ButtonProps } from "./Button";

export const StyledButton = styled.button<
  Pick<ButtonProps, "type" | "isDisabled">
>`
  ${({ theme, type, isDisabled }) => css`
    border: none;
    border-radius: ${theme.borderRadius};
    border: 1px solid transparent;
    padding: ${Space.px12} ${Space.px18} ${Space.px10};
    cursor: pointer;

    ${type === "primary" &&
    css`
      background-color: ${({ theme }) => theme.primaryColor};
      filter: drop-shadow(0px 4px 0px ${theme.primaryDarkColor});
      color: ${Color.White};
    `}

    ${type === "normal" &&
    css`
      background-color: ${Color.White};
      border: 1px solid ${Color.Light2};
      filter: drop-shadow(0px 4px 0px ${Color.Light3});
      color: ${Color.Light9};
    `}

    ${isDisabled &&
    css`
      opacity: 0.7;
      cursor: not-allowed;
    `}
  `}
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
