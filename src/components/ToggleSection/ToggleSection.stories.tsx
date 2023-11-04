import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";

import { ToggleSection } from "./ToggleSection";

const meta: Meta<typeof ToggleSection> = {
  component: ToggleSection,
  decorators: [ThemeProviderDecorator],
  argTypes: {
    title: {
      control: "text",
      description: "Hello world",
    },
  },
};

export const Primary: Story = {
  render: (props) => {
    return <ToggleSection {...props}>Content is so long</ToggleSection>;
  },
};

export default meta;
type Story = StoryObj<typeof ToggleSection>;
