import React from "react";

import { render, screen } from "@testing-library/react";

import { Button } from "../index";

describe("Button component", () => {
  it("should render component", () => {
    render(<Button testId="click-button">Click</Button>);
    expect(screen.getByTestId("click-button")).toBeInTheDocument();
  });
});
