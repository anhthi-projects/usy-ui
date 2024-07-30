import { FC, ReactNode } from "react";

import clsx from "clsx";

import { usySpacing } from "@src/styles";
import { ExtraCompProps } from "@src/types/extra-comp.props";
import { MarginProps } from "@src/types/margin.props";
import { PaddingProps } from "@src/types/padding.props";

import { Box } from "../Layout/Box";
import { Typography } from "../Typography";

type PanelProps = {
  title?: ReactNode;
  paddingProps?: PaddingProps;
  marginProps?: MarginProps;
  borderRadius?: string;
  children: ReactNode;
} & Partial<Pick<ExtraCompProps, "className" | "testId">>;

export const Panel: FC<PanelProps> = ({
  title,
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
