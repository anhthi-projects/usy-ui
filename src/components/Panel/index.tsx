import { FC, ReactNode } from "react";

import clsx from "clsx";

import { usySpacing } from "@src/styles";
import { ExtraCompProps } from "@src/types/extra-comp-props.type";
import { MarginProps } from "@src/types/margin-props.type";
import { PaddingProps } from "@src/types/padding-props.type";

import { MeasureUnit } from "../types";

type PanelProps = {
  paddingProps?: PaddingProps;
  marginProps?: MarginProps;
  borderRadius: MeasureUnit;
  children: ReactNode;
} & ExtraCompProps;

export const Panel: FC<PanelProps> = ({
  paddingProps = { padding: usySpacing.px20 },
  marginProps = { padding: usySpacing.px20 },
  borderRadius = usySpacing.px6,
  children,
  className,
  testId,
}) => {
  return (
    <div
      className={clsx("usy-panel-container", className)}
      style={{ ...paddingProps, ...marginProps, borderRadius }}
      data-testid={testId}
    >
      {children}
    </div>
  );
};
