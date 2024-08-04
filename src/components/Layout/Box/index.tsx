import { FC, ReactNode } from "react";

import { ExtraCompProps } from "@src/types/extra-comp.props";
import { MarginProps, PaddingProps } from "@src/types/margin-padding.props";
import { WidthProps, HeightProps } from "@src/types/width-height.props";

export type CommonBoxFlexProps = {
  as?: "div" | "span";
  widthProps?: WidthProps;
  heightProps?: HeightProps;
  paddingProps?: PaddingProps;
  marginProps?: MarginProps;
  children: ReactNode;
};

export type PureBoxProps = {
  display?: "block" | "inline-block";
};

type BoxProps = CommonBoxFlexProps &
  PureBoxProps &
  Partial<Pick<ExtraCompProps, "className" | "testId">>;

export const Box: FC<BoxProps> = ({
  display,
  widthProps,
  heightProps,
  paddingProps,
  marginProps,
  children,
}) => {
  return (
    <div
      style={{
        display,
        ...widthProps,
        ...heightProps,
        ...paddingProps,
        ...marginProps,
      }}
    >
      {children}
    </div>
  );
};
