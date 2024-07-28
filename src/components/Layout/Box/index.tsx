import { FC, ReactNode } from "react";

import { ExtraCompProps } from "@src/types/extra-comp-props.type";
import { MarginProps } from "@src/types/margin-props.type";
import { PaddingProps } from "@src/types/padding-props.type";

export type PureBoxProps = {
  as?: "div" | "span";
  width?: string;
  height?: string;
  display?: "block" | "inline-block";
  paddingProps?: PaddingProps;
  marginProps?: MarginProps;
};

type BoxProps = { children: ReactNode } & PureBoxProps &
  Partial<Pick<ExtraCompProps, "ref" | "className" | "testId">>;

export const Box: FC<BoxProps> = ({
  width,
  height,
  display,
  paddingProps,
  marginProps,
  children,
}) => {
  return (
    <div style={{ width, height, display, ...paddingProps, ...marginProps }}>
      {children}
    </div>
  );
};
