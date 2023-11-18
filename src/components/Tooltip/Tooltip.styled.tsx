import styled, { css } from "styled-components";

import { Typography } from "@src/components";
import { Color, Space } from "@src/styles";

import { UsyThemeProps } from "../UsyThemeProvider";

import { TooltipProps } from "./Tooltip";

export const TooltipContainer = styled.div`
  display: inline-block;
  position: relative;
`;

/**
 * Tooltip Popover
 */

export const TooltipPopover = styled.div<
  Pick<TooltipProps, "type" | "placement">
>`
  ${({ theme, type, placement }) => css`
    position: absolute;
    padding: ${Space.px10} ${Space.px14};
    filter: drop-shadow(0px 0px 6px ${Color.Light4});
    border-radius: ${theme.borderRadius};

    ${() => {
      switch (type) {
        case "primary":
          return css`
            color: ${Color.White};
            background-color: ${theme.primaryColor};
          `;
        case "white":
          return css`
            color: ${Color.Light8};
            background-color: ${Color.White};
          `;
        default:
          return css`
            color: ${Color.White};
            background-color: ${Color.Light12};
          `;
      }
    }}

    ${() => {
      switch (placement) {
        case "top":
          return css`
            top: calc(-100% - ${Space.px12});
            left: 50%;
            transform: translateX(-50%);
          `;

        case "right":
          return css`
            top: 50%;
            right: -${Space.px12};
            transform: translateX(100%) translateY(-50%);
          `;

        case "bottom":
          return css`
            left: 50%;
            bottom: calc(-100% - ${Space.px12});
            transform: translateX(-50%);
          `;

        case "left":
          return css`
            top: 50%;
            left: -${Space.px12};
            transform: translateX(-100%) translateY(-50%);
          `;
      }
    }}
  `}
`;

/**
 * Tooltip Content
 */

const getColor = (theme: UsyThemeProps, type?: string) => {
  switch (type) {
    case "primary":
      return theme.primaryColor;
    case "white":
      return Color.White;
    case "black":
      return Color.Black;
  }
};

const getArrow = (theme: UsyThemeProps, type?: string, placement?: string) => {
  switch (placement) {
    case "top":
      return css`
        content: "🞃";
        left: 50%;
        bottom: calc(-50% - 10px);
        transform: translateX(-50%);
      `;

    case "right":
      return css`
        content: "🞀";
        top: 50%;
        left: -21px;
        transform: translateY(-50%);
      `;

    case "bottom":
      return css`
        content: "🞁";
        left: 50%;
        top: calc(-100% - 3px);
        transform: translateX(-50%);
      `;

    case "left":
      return css`
        content: "🞂";
        top: 50%;
        right: -21px;
        transform: translateY(-50%);
      `;
  }
};

export const TooltipContent = styled.div<
  Pick<TooltipProps, "type" | "placement">
>`
  ${({ theme, type, placement }) => css`
    display: inline-block;
    position: relative;

    &::before {
      position: absolute;
      color: ${getColor(theme, type)};
      ${getArrow(theme, type, placement)}
    }
  `}
`;

export const ContentTypography = styled(Typography)`
  white-space: normal;
`;
