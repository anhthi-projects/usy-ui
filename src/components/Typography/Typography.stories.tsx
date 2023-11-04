import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";

import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  component: Typography,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
};

export const Component: Story = {
  render: () => (
    <>
      <Typography size="xs">
        [Xs] Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </Typography>
      <Typography size="sm">
        [Sm] Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </Typography>
      <Typography size="md">
        [Md] Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </Typography>
      <Typography size="lg">
        [Lg] Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </Typography>
      <Typography size="xl">
        [Xl] Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </Typography>
      <Typography size="exXl">
        [ExXl] Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </Typography>
    </>
  ),
};

export default meta;
type Story = StoryObj<typeof Typography>;
