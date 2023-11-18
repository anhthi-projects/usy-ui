import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Component: Story = {
  render: () => (
    <>
      <Button type="primary">Primary</Button>
      &nbsp; &nbsp; &nbsp;
      <Button type="normal">Normal</Button>
      &nbsp; &nbsp; &nbsp;
      <Button type="normal" isDisabled>
        Disabled
      </Button>
      &nbsp; &nbsp; &nbsp;
      <Button type="normal" isLoading>
        Loading
      </Button>
    </>
  ),
};

export default meta;
type Story = StoryObj<typeof Button>;
