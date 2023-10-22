import { FC, ReactNode, memo } from "react";

import { ReactSVG } from "react-svg";

import circleLoading from "src/assets/icons/circle-loading.svg";

import { StyledButton } from "./Button.styled";

enum ButtonTypes {
  Primary = "primary",
  Inactive = "inactive",
  Disabled = "disabled",
}

interface ButtonProps {
  text: string | ReactNode;
  type?: ButtonTypes;
  className?: string;
  testId?: string;
  onClick?: () => void;
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  text,
  className,
  testId,
  onClick,
  isLoading,
}) => {
  const renderContent = () => {
    if (isLoading) {
      return <ReactSVG src={circleLoading} />;
    }

    return text;
  };

  return (
    <StyledButton onClick={onClick} className={className} data-testid={testId}>
      {renderContent()}
    </StyledButton>
  );
};

export default memo(Button);
