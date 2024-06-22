import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";
import { EmailIcon, InfoCircleIcon } from "../Icon";

import { Input } from "./index";

const meta: Meta<typeof Input> = {
  component: Input,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <Input
        title="Email"
        placeholder="Enter your email"
        iconLeft={<EmailIcon width="18px" height="18px" />}
        hasAsterisk
      />
      <Input
        placeholder="Enter your email"
        iconRight={<InfoCircleIcon width="18px" height="18px" />}
      />
      <Input
        placeholder="Enter your email"
        description="This field cannot be empty"
        hasError
      />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Input>;
