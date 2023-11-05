import styled, { css } from "styled-components";

import { Color, FontWeight, Space } from "@src/styles";

export const Tab = styled.div<{ isActive?: boolean }>`
  ${({ theme, isActive }) => css`
    display: inline-block;
    padding: ${Space.px12} ${Space.px6};
    margin: 0 ${Space.px10};
    font-weight: ${FontWeight.SemiBold};
    color: ${isActive ? theme.primaryDarkColor : Color.Light8};
    border-bottom: 3px solid ${isActive ? theme.primaryColor : "transparent"};
    opacity: ${isActive ? 1 : 0.8};
    user-select: none;
    cursor: pointer;
  `}
`;

export const TabsHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid ${Color.Light2};
`;

export const TabsContent = styled.div`
  ${({ theme }) => css`
    padding: ${Space.px16} ${theme.horizontalPadding};
  `}
`;

export const TabsContainer = styled.div``;
