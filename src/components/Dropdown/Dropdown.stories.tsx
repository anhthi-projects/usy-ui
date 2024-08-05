import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";

import { Dropdown } from "./index";

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => (
    <Dropdown
      items={[
        { label: "Change Password", value: "change-password" },
        { label: "Settings", value: "settings" },
        { label: "Logout", value: "logout" },
      ]}
      onClick={(item) => alert(item.label)}
    >
      <button type="button">Open Dropdown</button>
    </Dropdown>
  ),
};

export default meta;
type Story = StoryObj<typeof Dropdown>;
