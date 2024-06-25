import React from "react";
import "../src/styles.scss";

export const ThemeProviderDecorator = (Story) => {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <React.StrictMode>
        <Story />
      </React.StrictMode>
    </div>
  );
};
