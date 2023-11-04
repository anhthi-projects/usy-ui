import styled, { css } from "styled-components";

import { ArrowHeadDownIcon } from "@src/components/Icon";
import { Color } from "@src/styles";

const HEADER_HEIGHT = "56px";

export const StyledToggleSectionContainer = styled.div<{
  isExpand?: boolean;
}>`
  ${({ theme, isExpand }) => css`
    width: 100%;
    max-height: ${isExpand ? "initial" : HEADER_HEIGHT};
    border: 1px solid ${Color.Light3};
    border-radius: ${theme.borderRadius};
    position: relative;
    overflow: hidden;

    &::before {
      display: ${isExpand ? "none" : "inline"};
      content: "";
      width: 40px;
      height: 3px;
      position: absolute;
      left: 50%;
      bottom: 5px;
      transform: translateX(-50%);
      background-color: ${Color.Light4};
      border-radius: 2px;
    }
  `}
`;

export const StyledToggleSectionHeader = styled.div`
  ${({ theme }) => css`
    height: ${HEADER_HEIGHT};
    min-height: ${HEADER_HEIGHT};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.horizontalPadding};
    border-bottom: 1px solid ${Color.Light3};
    user-select: none;

    svg {
      cursor: pointer;

      path {
        fill: ${Color.Light5};
      }
    }
  `}
`;

export const StyledArrowHeadDownIcon = styled(ArrowHeadDownIcon)<{
  isExpand?: boolean;
}>`
  transform: rotate(${({ isExpand }) => (isExpand ? "180deg" : "0deg")});
  transition-duration: 0.3s;
`;

export const StyledToggleSectionContent = styled.div`
  ${({ theme }) => css`
    padding: ${theme.horizontalPadding};
  `}
`;
