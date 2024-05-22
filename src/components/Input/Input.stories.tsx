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
    <>
      <Input
        title="Email"
        placeholder="Enter your email"
        iconLeft={<EmailIcon width="18px" height="18px" />}
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
    </>
  ),
};

export default meta;
type Story = StoryObj<typeof Input>;
