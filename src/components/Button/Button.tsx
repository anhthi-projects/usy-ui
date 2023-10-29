import { FC, ReactNode, memo } from "react";

import {
  StyledButton,
  StyledButtonContent,
  StyledLoadingIcon,
} from "./Button.styled";

export interface ButtonProps {
  children: ReactNode;
  type?: "primary" | "normal";
  className?: string;
  testId?: string;
  onClick?: () => void;
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
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

export default memo(Button);
