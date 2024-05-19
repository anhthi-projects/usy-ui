import { FC, ReactNode } from "react";

import clsx from "clsx";

import SvgLoadingCircle from "../Icon/LoadingCircle";

import "./Button.scss";

type ButtonType = "primary" | "outline" | "normal";
type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isDisabled?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  testId?: string;
}

export const Button: FC<ButtonProps> = ({
  type = "normal",
  size = "medium",
  isLoading = false,
  leftIcon,
  rightIcon,
  isDisabled,
  className,
  children,
  onClick,
  testId,
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
      data-testid={testId}
    >
      {leftIcon && (
        <span className="left-icon" data-testid={`${testId}-left-icon`}>
          {leftIcon}
        </span>
      )}
      {isLoading && (
        <SvgLoadingCircle
          width="30px"
          height="30px"
          data-testid={`${testId}-loading-icon`}
        />
      )}
      {children}
      {rightIcon && (
        <span className="right-icon" data-testid={`${testId}-right-icon`}>
          {rightIcon}
        </span>
      )}
    </button>
  );
};
