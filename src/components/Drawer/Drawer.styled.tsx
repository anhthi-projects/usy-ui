import styled, { css } from "styled-components";

import { Color, Space } from "@src/styles";

import { DrawerProps } from "./Drawer";

/**
 * Drawer Header
 */

export const StyledDrawerHeader = styled.div`
  ${({ theme }) => css`
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${Space.px4} ${theme.horizontalPadding};
    border-bottom: 1px solid ${Color.Light1};
    background-color: ${Color.White};
    filter: drop-shadow(0px 4px 0px ${Color.Light3});

    svg {
      cursor: pointer;

      path {
        fill: ${Color.Light5};
      }
    }
  `}
`;

/**
 * Drawer Content
 */

export const StyledDrawerContent = styled.div`
  ${({ theme }) => css`
    padding: ${Space.px28} ${theme.horizontalPadding};
  `}
`;

/**
 * Drawer Footer
 */

export const StyledDrawerFooter = styled.div`
  ${({ theme }) => css`
    height: 70px;
    border-top: 1px solid ${Color.Light1};
    padding: ${Space.px4} ${theme.horizontalPadding};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;

    button:not(:last-child) {
      margin: 0 ${Space.px16};
    }
  `}
`;

/**
 * Drawer Container
 */

export const StyledOverlay = styled.div<Pick<DrawerProps, "side" | "zIndex">>`
  ${({ side, zIndex }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: ${side === "left" ? "flex-start" : "flex-end"};
    align-items: center;
    background-color: rgba(0, 0, 0, 0.05);
    position: relative;
    z-index: ${zIndex};
    overflow: hidden;
  `}
`;

export const StyledDrawerContainer = styled.div<Pick<DrawerProps, "minWidth">>`
  ${({ minWidth }) => css`
    min-width: ${minWidth};
    height: 100vh;
    border-right: 1px solid ${Color.Light1};
    background-color: ${Color.White};
    filter: drop-shadow(0px 0px 6px ${Color.Light2});
    position: relative;
    overflow: hidden;
  `}
`;
