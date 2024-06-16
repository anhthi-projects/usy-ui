import { FC, ReactNode } from "react";

interface FlexChildProps {
  as?: "div" | "span";
  flexGrow?: number;
  flexShrink?: number;
  children: ReactNode;
}

export const FlexChild: FC<FlexChildProps> = ({
  as: Tag = "div",
  flexGrow,
  flexShrink,
  children,
}) => {
  return <Tag style={{ flexGrow, flexShrink }}>{children}</Tag>;
};
