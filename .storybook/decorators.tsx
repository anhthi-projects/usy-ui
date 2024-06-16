import React from "react";

import { UsyProvider } from "../src/components/Provider";
import "../src/styles.scss";

export const ThemeProviderDecorator = (Story) => (
  <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
    <React.StrictMode>
      <UsyProvider>
        <Story />
      </UsyProvider>
    </React.StrictMode>
  </div>
);
