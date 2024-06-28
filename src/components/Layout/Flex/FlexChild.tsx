import { FC, ReactNode } from "react";

import { ExtraCompProps } from "@src/interfaces/extra-comp-props.interface";

type FlexChildProps = {
  as?: "div" | "span";
  flexGrow?: number;
  flexShrink?: number;
  children: ReactNode;
} & ExtraCompProps;

export const FlexChild: FC<FlexChildProps> = ({
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
