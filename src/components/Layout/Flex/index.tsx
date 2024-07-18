import { FC, ReactNode } from "react";

import { MeasureUnit } from "@src/components/types";
import { ExtraCompProps } from "@src/types/extra-comp-props.type";

import { PureBoxProps } from "../Box";

type PureFlexProps = {
  display?: "flex" | "inline-flex";
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-between";
  alignItems?: "flex-start" | "center" | "flex-end" | "baseline" | "stretch";
  grow?: number;
  shrink?: number;
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: MeasureUnit;
};

type FlexProps = { children: ReactNode } & PureFlexProps &
  PureBoxProps &
  ExtraCompProps;

export const Flex: FC<FlexProps> = ({
  width,
  height,
  as: Tag = "div",
  display = "flex",
  direction,
  justifyContent,
  alignItems,
  grow,
  shrink,
  wrap,
  gap,
  paddingProps,
  marginProps,
  children,
  className,
  testId,
}) => {
  return (
    <Tag
      style={{
        width,
        height,
        display,
        flexDirection: direction,
        flexGrow: grow,
        flexShrink: shrink,
        justifyContent,
        alignItems,
        flexWrap: wrap,
        gap,
        ...paddingProps,
        ...marginProps,
      }}
      className={className}
      data-testid={testId}
    >
      {children}
    </Tag>
  );
};
