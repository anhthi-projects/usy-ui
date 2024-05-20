import React from "react";

import { Provider } from "../src/components/Provider";
import "../src/styles.scss";

export const ThemeProviderDecorator = (Story) => (
  <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
    <React.StrictMode>
      <Provider>
        <Story />
      </Provider>
    </React.StrictMode>
  </div>
);
