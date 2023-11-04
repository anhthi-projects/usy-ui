import React from "react";
import { UsyThemeProvider } from "../src/components/UsyThemeProvider";
import { UsyGlobalStyles } from "../src/components/UsyGlobalStyles";

export const ThemeProviderDecorator = (Story) => (
  <UsyThemeProvider>
    <UsyGlobalStyles />
    <Story />
  </UsyThemeProvider>
);
