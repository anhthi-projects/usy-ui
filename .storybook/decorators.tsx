import React from "react";
import { UsyThemeProvider } from "../src/components/ThemeProvider";

export const ThemeProviderDecorator = (Story) => (
  <UsyThemeProvider>
    <Story />
  </UsyThemeProvider>
);
