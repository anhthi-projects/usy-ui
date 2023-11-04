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
  isDisabled?: boolean;
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
  isDisabled,
}) => {
  const handleClick = () => {
    if (!isDisabled) {
      onClick?.();
    }
  };

  return (
    <StyledButton
      type={type}
      isDisabled={isDisabled}
      onClick={handleClick}
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
