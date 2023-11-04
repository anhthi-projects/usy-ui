import { FC, ReactNode } from "react";

import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

import { Color, Space } from "@src/styles";

export interface UsyThemeProps {
  primaryColor: string;
  primaryDarkColor: string;
  horizontalPadding: string;
  borderRadius: string;
}

interface UsyThemeProviderProps {
  theme?: DefaultTheme;
  children: ReactNode;
}

const defaultTheme: UsyThemeProps = {
  primaryColor: Color.Teal,
  primaryDarkColor: Color.TealDark,
  horizontalPadding: Space.px16,
  borderRadius: Space.px4,
};

export const UsyThemeProvider: FC<UsyThemeProviderProps> = ({
  theme,
  children,
}) => {
  return (
    <ThemeProvider theme={{ ...(theme || {}), ...defaultTheme }}>
      {children}
    </ThemeProvider>
  );
};
