import { FC, ReactNode, memo } from "react";

import { ReactSVG } from "react-svg";

import circleLoading, {
  ReactComponent as CircleLoading,
} from "../../assets/icons/circle-loading.svg";

import { StyledButton } from "./Button.styled";

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
  const renderContent = () => {
    if (isLoading) {
      return "loading...";
    }

    return children;
  };

  return (
    <>
      <StyledButton
        type={type}
        onClick={onClick}
        className={className}
        data-testid={testId}
      >
        {renderContent()}
      </StyledButton>
      <div>
        <ReactSVG width={128} src={circleLoading} />
        <CircleLoading />
      </div>
    </>
  );
};

export default memo(Button);
