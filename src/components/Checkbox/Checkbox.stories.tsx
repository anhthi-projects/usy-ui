import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";

import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Component: Story = {
  render: () => (
    <>
      <Checkbox label="Check me" />
      &nbsp; &nbsp; &nbsp;
      <Checkbox label="Check me" isChecked />
    </>
  ),
};

export default meta;
type Story = StoryObj<typeof Checkbox>;
