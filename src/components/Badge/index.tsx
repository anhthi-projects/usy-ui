import { CSSProperties, FC, ReactNode, useMemo } from "react";

import clsx from "clsx";

import { ExtraCompProps } from "@src/interfaces/extra-comp-props.interface";

import { getColor, getTypeCss } from "./Badge.utils";

export type BadgeType = "filled" | "outline" | "normal";
export type BadgeSize = "small" | "medium" | "large";
export type BadgeColor =
  | "primary"
  | "primary-light"
  | "primary-dark"
  | "random"
  | CSSProperties["color"];

interface BadgeProps extends ExtraCompProps {
  type?: BadgeType;
  size?: BadgeSize;
  color?: BadgeColor;
  children: ReactNode;
}

export const Badge: FC<BadgeProps> = ({
  type = "outline",
  size = "medium",
  color = "primary",
  children,
  className,
  testId,
}) => {
  const colorInHex = useMemo(() => getColor(color), [color]);
  const typeCss = getTypeCss(colorInHex, type);

  return (
    <div
      className={clsx(
        "usy-badge-container",
        {
          [`size-${size}`]: Boolean(size),
        },
        className
      )}
      style={{ ...typeCss }}
      data-testid={testId}
    >
      {children}
    </div>
  );
};
