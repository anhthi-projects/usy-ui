import { FC, ReactNode, memo } from "react";

import SVG from "react-inlinesvg";
import { ReactSVG } from "react-svg";

import circleLoading, {
  ReactComponent as CircleLoading,
} from "../../assets/icons/circle-loading.svg";

import { StyledButton } from "./Button.styled";

const CircleLoadingV2 = circleLoading;

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
        <SVG width={128} src={circleLoading} />
        <SVG width={128} src="../../assets/icons/circle-loading.svg" />
        <ReactSVG width={128} src={circleLoading} />
        <ReactSVG width={128} src="../../assets/icons/circle-loading.svg" />
        <CircleLoading />
        <CircleLoadingV2 />
      </div>
    </>
  );
};

export default memo(Button);
