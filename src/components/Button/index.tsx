import { FC, ReactNode } from "react";

import clsx from "clsx";

import SvgLoadingCircle from "../Icon/LoadingCircle";

export type ButtonType = "primary" | "outline" | "normal";
export type ButtonSize = "small" | "medium" | "large";

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
  isDisabled = false,
  leftIcon,
  rightIcon,
  className,
  children,
  onClick,
  testId = "",
}) => {
  const handleClick = () => {
    if (isDisabled || isLoading || typeof onClick !== "function") {
      return;
    }

    onClick();
  };

  const sizeClassName = `size-${size}`;
  const typeClassName = `type-${type}`;

  return (
    <button
      className={clsx(
        "usy-button-container",
        {
          [sizeClassName]: Boolean(size),
          [typeClassName]: Boolean(type),
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
