import React from "react";

import { Provider } from "../src/components/Provider";

export const ThemeProviderDecorator = (Story) => (
  <React.StrictMode>
    <Provider>
      <Story />
    </Provider>
  </React.StrictMode>
);
