import React from "react";

import { Provider } from "../src/components/Provider";
import "../src/styles.scss";

export const ThemeProviderDecorator = (Story) => (
  <React.StrictMode>
    <Provider>
      <Story />
    </Provider>
  </React.StrictMode>
);
