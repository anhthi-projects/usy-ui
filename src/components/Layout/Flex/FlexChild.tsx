import { FC, ReactNode } from "react";

import { ExtraCompProps } from "@src/interfaces/extra-comp-props.interface";

interface FlexChildProps {
  as?: "div" | "span";
  flexGrow?: number;
  flexShrink?: number;
  children: ReactNode;
}

export const FlexChild: FC<FlexChildProps & ExtraCompProps> = ({
  as: Tag = "div",
  flexGrow,
  flexShrink,
  children,
  className,
  testId,
}) => {
  return (
    <Tag
      style={{ flexGrow, flexShrink }}
      className={className}
      data-testid={testId}
    >
      {children}
    </Tag>
  );
};
