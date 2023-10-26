import { FC, ReactNode, memo } from "react";

import { StyledButton } from "./Button.styled";

export interface ButtonProps {
  text: string | ReactNode;
  type: "primary" | "normal";
  className?: string;
  testId?: string;
  onClick?: () => void;
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  type,
  text,
  className,
  testId,
  onClick,
  isLoading,
}) => {
  const renderContent = () => {
    if (isLoading) {
      return "loading...";
    }

    return text;
  };

  return (
    <StyledButton
      type={type}
      onClick={onClick}
      className={className}
      data-testid={testId}
    >
      {renderContent()}
    </StyledButton>
  );
};

export default memo(Button);
