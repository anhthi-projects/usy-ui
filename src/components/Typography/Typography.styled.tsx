import styled, { css } from "styled-components";

import { FontSize, Space } from "@src/styles";
import { firstCapitalize } from "@src/utils";

import { TypographyProps } from "./Typography";

export const StyledTypography = styled.p<
  Pick<TypographyProps, "size" | "fontWeight" | "hasBottomSpace">
>`
  ${({ size, fontWeight, hasBottomSpace }) => css`
    font-size: ${FontSize[firstCapitalize(size) as keyof typeof FontSize]};
    font-weight: ${fontWeight};
    margin: 0 0 ${hasBottomSpace ? Space.px8 : 0} 0;
  `}
`;
