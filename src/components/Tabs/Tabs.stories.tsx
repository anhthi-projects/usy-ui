import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";

import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "fullscreen",
  },
};

export const Component: Story = {
  render: () => (
    <>
      <Tabs
        items={[
          {
            key: "tab1",
            label: "Tab 1",
            element: (
              <div>
                Tab 1 - Lorem Ipsum is simply dummy text of the printing and
                typesetting
              </div>
            ),
          },
          {
            key: "tab2",
            label: "Tab 2",
            element: (
              <div>
                Tab 2 - Lorem Ipsum is simply dummy text of the printing and
                typesetting
              </div>
            ),
          },
          {
            key: "tab3",
            label: "Tab 3",
            element: (
              <div>
                Tab 3 - Lorem Ipsum is simply dummy text of the printing and
                typesetting
              </div>
            ),
          },
        ]}
      />
    </>
  ),
};

export default meta;
type Story = StoryObj<typeof Tabs>;
