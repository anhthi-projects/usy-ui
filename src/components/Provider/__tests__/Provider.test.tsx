import React from "react";

import { render, screen } from "@testing-library/react";

import { Provider } from "../index";

describe("Provider component", () => {
  describe("render", () => {
    it("should render component", () => {
      render(
        <Provider>
          <span data-testid="provider-content">Some contents</span>
        </Provider>
      );

      expect(screen.getByTestId("provider-content")).toBeInTheDocument();
    });

    it("should set css variable at document element", () => {
      render(
        <Provider
          theme={{
            colorPrimary: "red",
            colorPrimaryLight: "blue",
            colorPrimaryDark: "green",
          }}
        >
          <span data-testid="provider-content">Some contents</span>
        </Provider>
      );

      const styles = window.getComputedStyle(document.documentElement);

      expect(screen.getByTestId("provider-content")).toBeInTheDocument();
      expect(styles.getPropertyValue("--usy-color-primary")).toBe("red");
      expect(styles.getPropertyValue("--usy-color-primary-light")).toBe("blue");
      expect(styles.getPropertyValue("--usy-color-primary-dark")).toBe("green");
    });
  });
});
