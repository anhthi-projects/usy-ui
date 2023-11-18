import { FC, ReactNode } from "react";

import { StyledTypography } from "./Typography.styled";

export interface TypographyProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "exXl";
  fontWeight?: number;
  hasBottomSpace?: boolean;
  children: ReactNode;
  className?: string;
  testId?: string;
}

export const Typography: FC<TypographyProps> = ({
  size = "sm",
  fontWeight = 400,
  hasBottomSpace = true,
  children,
  className,
  testId,
}) => {
  return (
    <StyledTypography
      size={size}
      fontWeight={fontWeight}
      hasBottomSpace={hasBottomSpace}
      className={className}
      data-testid={testId}
    >
      {children}
    </StyledTypography>
  );
};
