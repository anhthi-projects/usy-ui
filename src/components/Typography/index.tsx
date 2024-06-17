import { FC, ReactNode } from "react";

import clsx from "clsx";

interface TypographyProps {
  tag?: "small" | "p" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "extraSmall" | "small" | "medium" | "large" | "extraLarge";
  weight?:
    | "thin"
    | "light"
    | "semilight"
    | "normal"
    | "semibold"
    | "bold"
    | "heavy";
  noMargin?: boolean;
  children: ReactNode;
  className?: string;
  testId?: string;
}

export const Typography: FC<TypographyProps> = ({
  tag: Tag = "p",
  weight = "medium",
  noMargin = false,
  size,
  children,
  className,
  testId = "",
}) => {
  const sizeClassName = `size-${size}`;
  const weightClassName = `weight-${weight}`;

  return (
    <Tag
      className={clsx(
        "usy-typography-container",
        {
          [sizeClassName]: Boolean(size),
          [weightClassName]: Boolean(weight),
          "no-margin": noMargin,
        },
        className
      )}
      data-testid={testId}
    >
      {children}
    </Tag>
  );
};
