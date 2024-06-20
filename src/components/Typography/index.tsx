import { FC, ReactNode } from "react";

import clsx from "clsx";

import { ExtraCompProps } from "@src/interfaces/extra-comp-props.interface";

type TypographyTag =
  | "small"
  | "span"
  | "label"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

type TypographySize =
  | "extra-small"
  | "small"
  | "medium"
  | "large"
  | "extra-large";

type TypographyWeight =
  | "thin"
  | "light"
  | "semilight"
  | "normal"
  | "semibold"
  | "bold"
  | "heavy";

interface TypographyProps extends ExtraCompProps {
  tag?: TypographyTag;
  size?: TypographySize;
  weight?: TypographyWeight;
  noMargin?: boolean;
  children: ReactNode;
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
