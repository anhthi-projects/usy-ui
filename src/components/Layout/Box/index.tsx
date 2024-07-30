import { FC, ReactNode } from "react";

import { ExtraCompProps } from "@src/types/extra-comp.props";
import { MarginProps } from "@src/types/margin.props";
import { PaddingProps } from "@src/types/padding.props";

export type PureBoxProps = {
  as?: "div" | "span";
  width?: string;
  height?: string;
  display?: "block" | "inline-block";
  paddingProps?: PaddingProps;
  marginProps?: MarginProps;
};

type BoxProps = { children: ReactNode } & PureBoxProps &
  Partial<Pick<ExtraCompProps, "className" | "testId">>;

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
