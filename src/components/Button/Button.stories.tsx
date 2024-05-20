import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";
import { RunningTimerIcon } from "../Icon";

import { Button } from "./index";

const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => (
    <>
      <Button type="primary">Primary</Button>
      <Button type="outline">Outline</Button>
      <Button type="normal">Normal</Button>
      <Button type="normal" isDisabled>
        Disabled
      </Button>
      <Button type="normal" isLoading>
        Loading
      </Button>
      <Button
        type="normal"
        leftIcon={<RunningTimerIcon width="18px" height="18px" />}
      >
        Left Icon
      </Button>
      <Button
        type="normal"
        rightIcon={<RunningTimerIcon width="18px" height="18px" />}
      >
        Right Icon
      </Button>
    </>
  ),
};

export const Sizes: Story = {
  render: () => (
    <>
      <Button type="normal" size="large">
        large
      </Button>
      &nbsp; &nbsp; &nbsp;
      <Button type="normal" size="medium">
        medium
      </Button>
      &nbsp; &nbsp; &nbsp;
      <Button type="normal" size="small">
        small
      </Button>
    </>
  ),
};

export default meta;
type Story = StoryObj<typeof Button>;
