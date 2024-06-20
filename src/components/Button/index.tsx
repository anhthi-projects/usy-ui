import { ReactNode, forwardRef } from "react";

import clsx from "clsx";

import { ExtraCompProps } from "@src/interfaces/extra-comp-props.interface";

import SvgLoadingCircle from "../Icon/LoadingCircle";

export type ButtonType = "primary" | "outline" | "normal";
export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps extends ExtraCompProps {
  type?: ButtonType;
  size?: ButtonSize;
  isLoading?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  isDisabled?: boolean;
  isBlock?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      type = "normal",
      size = "medium",
      isLoading = false,
      isDisabled = false,
      isBlock = false,
      iconLeft,
      iconRight,
      children,
      onClick,
      className,
      testId = "",
    },
    ref
  ) {
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
        ref={ref}
        className={clsx(
          "usy-button-container",
          {
            [sizeClassName]: Boolean(size),
            [typeClassName]: Boolean(type),
            disabled: isDisabled,
            block: isBlock,
          },
          className
        )}
        onClick={handleClick}
        data-testid={testId}
      >
        {iconLeft && (
          <span className="left-icon" data-testid={`${testId}-icon-left`}>
            {iconLeft}
          </span>
        )}
        {isLoading && (
          <SvgLoadingCircle
            width="30px"
            height="30px"
            className="loading-icon"
            data-testid={`${testId}-loading-icon`}
          />
        )}
        {children}
        {iconRight && (
          <span className="right-icon" data-testid={`${testId}-icon-right`}>
            {iconRight}
          </span>
        )}
      </button>
    );
  }
);
