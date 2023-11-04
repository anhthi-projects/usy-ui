import styled, { css } from "styled-components";

import { ArrowHeadDownIcon } from "@src/components/Icon";
import { Color } from "@src/styles";

export const StyledToggleSectionContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    border: 1px solid ${Color.Light2};
    border-radius: ${theme.borderRadius};
    overflow: hidden;
  `}
`;

export const StyledToggleSectionHeader = styled.div`
  ${({ theme }) => css`
    min-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.horizontalPadding};
    border-bottom: 1px solid ${Color.Light2};
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
