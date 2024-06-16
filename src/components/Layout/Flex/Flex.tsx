import { FC, ReactNode } from "react";

import { MeasureUnit } from "@src/components/types";

interface FlexProps {
  as?: "div" | "span";
  display?: "flex" | "inline-flex";
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-between";
  alignItems?: "flex-start" | "center" | "flex-end" | "baseline" | "stretch";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: MeasureUnit;
  gapX?: MeasureUnit;
  gapY?: MeasureUnit;
  children: ReactNode;
}

export const Flex: FC<FlexProps> = ({
  as: Tag = "div",
  display = "flex",
  direction,
  justifyContent,
  alignItems,
  wrap = "wrap",
}) => {
  return (
    <Tag
      style={{
        display,
        flexDirection: direction,
        justifyContent,
        alignItems,
        flexWrap: wrap,
      }}
    />
  );
};
