import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";

import { Drawer, DrawerHeader, DrawerFooter } from "./Drawer";

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "fullscreen",
  },
};

export const Component: Story = {
  render: () => (
    <Drawer
      isOpen
      header={<DrawerHeader title="Hello" onClose={() => alert("closed")} />}
      footer={
        <DrawerFooter
          buttons={[
            {
              type: "primary",
              label: "Confirm",
              onClick: () => alert("confirmed"),
            },
            {
              type: "normal",
              label: "Cancel",
              onClick: () => alert("Canceled"),
            },
          ]}
        />
      }
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting
    </Drawer>
  ),
};

export default meta;
type Story = StoryObj<typeof Drawer>;
