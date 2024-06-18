import { CSSProperties, FC, ReactNode, useMemo } from "react";

import clsx from "clsx";

import { usyColors } from "@src/styles";
import { getRandomColor } from "@src/utils/helpers";

type BadgeType = "filled" | "outline" | "normal";
type BadgeSize = "small" | "medium" | "large";
type BadgeColor =
  | "primary"
  | "primary-light"
  | "primary-dark"
  | "random"
  | CSSProperties["color"];

interface BadgeProps {
  type?: BadgeType;
  size?: BadgeSize;
  color?: BadgeColor;
  children: ReactNode;
  testId?: string;
}

const getColor = (color: BadgeColor) => {
  return color === "random" ? getRandomColor() : `var(--usy-color-${color})`;
};

const getTypeCss = (
  colorInHex: CSSProperties["color"],
  type?: BadgeType
): CSSProperties => {
  switch (type) {
    case "filled": {
      return {
        backgroundColor: colorInHex,
        border: `2px solid ${colorInHex}`,
        color: usyColors.white,
      };
    }

    case "outline": {
      return {
        backgroundColor: "transparent",
        border: `2px solid ${colorInHex}`,
        color: colorInHex,
      };
    }

    default: {
      return {
        backgroundColor: usyColors.light3,
        border: `2px solid ${usyColors.light3}`,
        color: usyColors.black,
      };
    }
  }
};

export const Badge: FC<BadgeProps> = ({
  type = "outline",
  size = "medium",
  color = "primary",
  children,
  testId,
}) => {
  const colorInHex = useMemo(() => getColor(color), [color]);
  const typeCss = getTypeCss(colorInHex, type);

  return (
    <div
      className={clsx("usy-badge-container", {
        [`size-${size}`]: Boolean(size),
      })}
      style={{ ...typeCss }}
      data-testid={testId}
    >
      {children}
    </div>
  );
};
