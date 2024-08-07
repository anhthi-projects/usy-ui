import { FC, ReactNode } from "react";

import clsx from "clsx";

import { usySpacing } from "@src/styles";
import { ExtraCompProps } from "@src/types/extra-comp.props";
import { MarginProps, PaddingProps } from "@src/types/margin-padding.props";
import { HeightProps, WidthProps } from "@src/types/width-height.props";

type PureScrollableProps = {
  widthProps: WidthProps;
  heightProps?: HeightProps;
  paddingProps?: PaddingProps;
  marginProps?: MarginProps;
  overflowX?: "hidden" | "auto" | "scroll";
  overflowY?: "hidden" | "auto" | "scroll";
  children?: ReactNode;
};

type ScrollableProps = PureScrollableProps &
  Partial<Pick<ExtraCompProps, "className" | "testId">>;

export const Scrollable: FC<ScrollableProps> = ({
  widthProps,
  heightProps,
  paddingProps,
  marginProps,
  overflowX = "hidden",
  overflowY = "auto",
  children,
  className,
  testId,
}) => {
  return (
    <div
      className={clsx("usy-scrollable-container", className)}
      style={{
        ...widthProps,
        ...heightProps,
        ...(paddingProps || { paddingRight: usySpacing.px10 }),
        ...marginProps,
        overflowX: overflowX,
        overflowY: overflowY,
      }}
      data-testid={testId}
    >
      {children}
    </div>
  );
};
