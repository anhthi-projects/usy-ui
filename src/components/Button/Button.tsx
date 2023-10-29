import { FC, ReactNode } from "react";

import {
  StyledButton,
  StyledButtonContent,
  StyledLoadingIcon,
} from "./Button.styled";

export type ButtonType = "primary" | "normal";

export interface ButtonProps {
  children: ReactNode;
  type?: ButtonType;
  className?: string;
  testId?: string;
  onClick?: () => void;
  isLoading?: boolean;
}

export const Button: FC<ButtonProps> = ({
  type = "normal",
  children,
  className,
  testId,
  onClick,
  isLoading,
}) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      className={className}
      data-testid={testId}
    >
      {isLoading && <StyledLoadingIcon />}
      <StyledButtonContent isLoading={isLoading}>
        {children}
      </StyledButtonContent>
    </StyledButton>
  );
};
