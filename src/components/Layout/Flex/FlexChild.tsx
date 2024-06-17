import { FC, ReactNode } from "react";

interface FlexChildProps {
  as?: "div" | "span";
  flexGrow?: number;
  flexShrink?: number;
  children: ReactNode;
  className?: string;
}

export const FlexChild: FC<FlexChildProps> = ({
  as: Tag = "div",
  flexGrow,
  flexShrink,
  children,
  className,
}) => {
  return (
    <Tag style={{ flexGrow, flexShrink }} className={className}>
      {children}
    </Tag>
  );
};
