import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";

import { Typography } from "./index";

const meta: Meta<typeof Typography> = {
  component: Typography,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography tag="h6">h6: Lorem Ipsum is simply dummy text</Typography>
      <Typography tag="h5">h5: Lorem Ipsum is simply dummy text</Typography>
      <Typography tag="h4" isNoMargin>
        h4: Lorem Ipsum is simply dummy text
      </Typography>
      <Typography tag="h3">h3: Lorem Ipsum is simply dummy text</Typography>
      <Typography tag="h2">h2: Lorem Ipsum is simply dummy text</Typography>
      <Typography tag="h1">h1: Lorem Ipsum is simply dummy text</Typography>
      <Typography tag="small">
        small: Lorem Ipsum is simply dummy text
      </Typography>
      <Typography tag="label">
        label: Lorem Ipsum is simply dummy text
      </Typography>
      <Typography tag="p">p: Lorem Ipsum is simply dummy text</Typography>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography size="extraSmall">
        extraSmall:
        <br /> The h1 tag of the printing and typesetting industry
      </Typography>
      <Typography size="small">
        small:
        <br /> The h1 tag of the printing and typesetting industry
      </Typography>
      <Typography size="medium">
        medium:
        <br /> The h1 tag of the printing and typesetting industry
      </Typography>
      <Typography size="large">
        large:
        <br /> The h1 tag of the printing and typesetting industry
      </Typography>
      <Typography size="extraLarge">
        extraLarge:
        <br /> The h1 tag of the printing and typesetting industry
      </Typography>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <>
      <Typography weight="thin">100: thin</Typography>
      <Typography weight="light">200: light</Typography>
      <Typography weight="semilight">300: semilight</Typography>
      <Typography weight="normal">400: normal</Typography>
      <Typography weight="semibold">500: semibold</Typography>
      <Typography weight="bold">600: bold</Typography>
      <Typography weight="heavy">700: heavy</Typography>
    </>
  ),
};

export default meta;
type Story = StoryObj<typeof Typography>;
