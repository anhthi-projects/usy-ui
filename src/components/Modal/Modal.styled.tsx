import styled from "styled-components";

import { Color, FontSize, Space } from "@src/styles";

/**
 * Modal Header
 */

export const StyledModalHeader = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${Space.px4} ${Space.px16};
  border-bottom: 1px solid ${Color.Light1};
  background-color: ${Color.White};
  filter: drop-shadow(0px 4px 0px ${Color.Light3});

  svg {
    cursor: pointer;

    path {
      fill: ${Color.Light5};
    }
  }
`;

export const StyledHeaderTitle = styled.h3`
  display: inline-block;
  font-size: ${FontSize.Lg};
`;

/**
 * Modal Content
 */

export const StyledModalContent = styled.div`
  padding: ${Space.px28} ${Space.px16};
`;

/**
 * Modal Footer
 */

export const StyledModalFooter = styled.div`
  height: 70px;
  border-top: 1px solid ${Color.Light1};
  padding: ${Space.px4} ${Space.px16};
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button:not(:last-child) {
    margin: 0 ${Space.px16};
  }
`;

/**
 * Modal Container
 */

export const StyledOverlay = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

export const StyledModalContainer = styled.div`
  min-width: 400px;
  min-height: 200px;
  border-radius: 8px;
  border: 1px solid ${Color.Light1};
  background-color: ${Color.White};
  filter: drop-shadow(0px 0px 6px ${Color.Light2});
  margin: ${Space.px16};
  overflow: hidden;
`;
