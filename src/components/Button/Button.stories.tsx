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
      <Button variant="primary">Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="normal">Normal</Button>
      <Button variant="normal" isDisabled>
        Disabled
      </Button>
      <Button variant="normal" isLoading>
        Loading
      </Button>
      <Button
        variant="normal"
        iconLeft={<RunningTimerIcon width="18px" height="18px" />}
      >
        Left Icon
      </Button>
      <Button
        variant="normal"
        iconRight={<RunningTimerIcon width="18px" height="18px" />}
      >
        Right Icon
      </Button>
    </>
  ),
};

export const Sizes: Story = {
  render: () => (
    <>
      <Button variant="normal" size="large">
        large
      </Button>
      &nbsp; &nbsp; &nbsp;
      <Button variant="normal" size="medium">
        medium
      </Button>
      &nbsp; &nbsp; &nbsp;
      <Button variant="normal" size="small">
        small
      </Button>
    </>
  ),
};

export default meta;
type Story = StoryObj<typeof Button>;
