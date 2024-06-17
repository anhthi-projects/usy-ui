import { FC, ReactNode } from "react";

import { MeasureUnit } from "@src/components/types";

interface FlexProps {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  as?: "div" | "span";
  display?: "flex" | "inline-flex";
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-between";
  alignItems?: "flex-start" | "center" | "flex-end" | "baseline" | "stretch";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: MeasureUnit;
  children: ReactNode;
  className?: string;
}

export const Flex: FC<FlexProps> = ({
  width,
  height,
  padding,
  margin,
  as: Tag = "div",
  display = "flex",
  direction,
  justifyContent,
  alignItems,
  wrap = "wrap",
  gap,
  children,
  className,
}) => {
  return (
    <Tag
      style={{
        width,
        height,
        padding,
        margin,
        display,
        flexDirection: direction,
        justifyContent,
        alignItems,
        flexWrap: wrap,
        gap,
      }}
      className={className}
    >
      {children}
    </Tag>
  );
};
