import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../../.storybook/decorators";

import { Password } from "./index";

const meta: Meta<typeof Password> = {
  component: Password,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => (
    <>
      <Password
        title="Password"
        placeholder="Enter your password"
        className=""
        testId=""
      />
    </>
  ),
};

export default meta;
type Story = StoryObj<typeof Password>;
