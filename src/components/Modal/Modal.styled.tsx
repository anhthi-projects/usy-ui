import styled, { css } from "styled-components";

import { Color, Space } from "@src/styles";

import { ModalProps } from "./Modal";

/**
 * Modal Header
 */

export const StyledModalHeader = styled.div`
  ${({ theme }) => css`
    height: 60px;
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
 * Modal Content
 */

export const StyledModalContent = styled.div`
  ${({ theme }) => css`
    padding: ${Space.px28} ${theme.horizontalPadding};
  `}
`;

/**
 * Modal Footer
 */

export const StyledModalFooter = styled.div`
  ${({ theme }) => css`
    height: 70px;
    border-top: 1px solid ${Color.Light1};
    padding: ${Space.px4} ${theme.horizontalPadding};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button:not(:last-child) {
      margin: 0 ${Space.px16};
    }
  `}
`;

/**
 * Modal Container
 */

export const StyledOverlay = styled.div<Pick<ModalProps, "zIndex">>`
  ${({ zIndex }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.05);
    position: relative;
    z-index: ${zIndex};
    overflow: hidden;
  `}
`;

export const StyledModalContainer = styled.div<Pick<ModalProps, "minWidth">>`
  ${({ theme, minWidth }) => css`
    min-width: ${minWidth};
    min-height: 200px;
    border-radius: 8px;
    border: 1px solid ${Color.Light1};
    background-color: ${Color.White};
    filter: drop-shadow(0px 0px 6px ${Color.Light2});
    margin: ${Space.px16} ${theme.horizontalPadding};
    overflow: hidden;
  `}
`;
