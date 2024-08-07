import { FC } from "react";

import { Box } from "@src/components/Layout/Box";
import { Typography } from "@src/components/Typography";
import { usySpacing } from "@src/styles";

type PanelTitleProps = {
  title: string;
  size?: "medium" | "large" | "extra-large";
};

export const PanelTitle: FC<PanelTitleProps> = ({ title, size = "large" }) => {
  const getMarginBottom = () => {
    switch (size) {
      case "medium": {
        return usySpacing.px20;
      }
      case "large": {
        return usySpacing.px28;
      }
      case "extra-large": {
        return usySpacing.px40;
      }
    }
  };

  return (
    <Box marginProps={{ marginBottom: getMarginBottom() }}>
      <Typography weight="semibold" size={size} noMargin>
        {title}
      </Typography>
    </Box>
  );
};
