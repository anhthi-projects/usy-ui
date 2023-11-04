import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [ThemeProviderDecorator],
  argTypes: {
    type: {
      options: ["primary", "normal"],
      control: { type: "radio" },
    },
    isLoading: {
      control: "boolean",
    },
  },
};

export const Primary: Story = {
  render: (props) => <Button {...props}>Click me</Button>,
};

export default meta;
type Story = StoryObj<typeof Button>;
