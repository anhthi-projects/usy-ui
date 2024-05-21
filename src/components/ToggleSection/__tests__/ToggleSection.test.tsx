import React from "react";

import { render, screen } from "@testing-library/react";

import { ToggleSection } from "../index";

describe("ToggleSection component", () => {
  describe("render", () => {
    it("should render component", () => {
      render(
        <ToggleSection title="Usy UI" testId="lorem">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry is standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </ToggleSection>
      );

      expect(screen.getByTestId("lorem-header")).toBeDefined();
      expect(screen.getByTestId("lorem-header-title")).toBeInTheDocument();
      expect(screen.getByTestId("lorem-header-toggle")).toBeInTheDocument();
      expect(screen.getByTestId("lorem-content")).toBeInTheDocument();
    });
  });
  describe("action", () => {});
});
