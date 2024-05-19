import { FC, ReactNode } from "react";

import clsx from "clsx";

import "./Button.scss";
import SvgLoadingCircle from "../Icon/LoadingCircle";

type ButtonType = "primary" | "outline" | "normal";
type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isDisabled?: boolean;
  className?: string;
  children: ReactNode;
  testId?: string;
  onClick?: () => void;
  isLoading?: boolean;
}

export const Button: FC<ButtonProps> = ({
  type = "normal",
  size = "medium",
  leftIcon,
  rightIcon,
  isLoading = false,
  isDisabled,
  className,
  children,
  onClick,
}) => {
  const handleClick = () => {
    if (isDisabled || isLoading || typeof onClick !== "function") {
      return;
    }

    onClick();
  };

  return (
    <button
      className={clsx(
        "usy-button-container",
        {
          [size]: true,
          [type]: true,
          disabled: isDisabled,
        },
        className
      )}
      onClick={handleClick}
    >
      {leftIcon && <span className="left-icon">{leftIcon}</span>}
      {isLoading && <SvgLoadingCircle width="30px" height="30px" />}
      {children}
      {rightIcon && <span className="right-icon">{rightIcon}</span>}
    </button>
  );
};
