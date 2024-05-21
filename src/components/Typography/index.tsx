import { FC, ReactNode } from "react";

import clsx from "clsx";

interface TypographyProps {
  tag?: "small" | "p" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "extraSmall" | "small" | "medium" | "large" | "extraLarge";
  weight?: "light" | "medium" | "semibold" | "bold";
  isNoMargin?: boolean;
  children: ReactNode;
  className?: string;
  testId?: string;
}

export const Typography: FC<TypographyProps> = ({
  tag: Tag = "p",
  weight = "medium",
  isNoMargin = false,
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
          "no-margin": isNoMargin,
        },
        className
      )}
      data-testid={testId}
    >
      {children}
    </Tag>
  );
};