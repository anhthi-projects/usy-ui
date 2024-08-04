import { FC, ReactNode } from "react";

import clsx from "clsx";

import { usySpacing } from "@src/styles";
import { ExtraCompProps } from "@src/types/extra-comp.props";
import { MarginProps, PaddingProps } from "@src/types/margin-padding.props";
import { HeightProps, WidthProps } from "@src/types/width-height.props";

import { Box } from "../Layout/Box";
import { Typography } from "../Typography";

type PurePanelProps = {
  title?: ReactNode;
  widthProps?: WidthProps;
  heightProps?: HeightProps;
  paddingProps?: PaddingProps;
  marginProps?: MarginProps;
  borderRadius?: string;
  children: ReactNode;
};
type PanelProps = PurePanelProps &
  Partial<Pick<ExtraCompProps, "className" | "testId">>;

export const Panel: FC<PanelProps> = ({
  title,
  widthProps,
  heightProps,
  paddingProps,
  marginProps,
  borderRadius = usySpacing.px6,
  children,
  className,
  testId,
}) => {
  return (
    <div
      className={clsx("usy-panel-container", className)}
      style={{
        ...widthProps,
        ...heightProps,
        ...(paddingProps || { padding: usySpacing.px24 }),
        ...marginProps,
        borderRadius,
      }}
      data-testid={testId}
    >
      {title && (
        <Box marginProps={{ marginBottom: usySpacing.px40 }}>
          <Typography size="extra-large" noMargin>
            {title}
          </Typography>
        </Box>
      )}
      {children}
    </div>
  );
};
