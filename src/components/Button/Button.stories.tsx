import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export const Primary: Story = {
  name: "I am the primary",
  render: () => <Button text="Button" />,
};

export default meta;
type Story = StoryObj<typeof Button>;
