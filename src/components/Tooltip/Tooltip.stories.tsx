import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";
import { Button } from "../Button";

import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Type: Story = {
  render: () => (
    <>
      <Tooltip type="primary" content="Ipsum is simply dummy text of">
        <Button>Primary</Button>
      </Tooltip>
      &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
      <Tooltip type="black" content="Ipsum is simply dummy text of">
        <Button>Black</Button>
      </Tooltip>
      &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
      <Tooltip type="white" content="Ipsum is simply dummy text of">
        <Button>White</Button>
      </Tooltip>
    </>
  ),
};

export const Position: Story = {
  render: () => (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Tooltip placement="top-left" content="Ipsum is simply dummy text of">
          <Button>Top left</Button>
        </Tooltip>
        &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
        &nbsp; &nbsp;
        <Tooltip placement="top" content="Ipsum is simply dummy text of">
          <Button>Top</Button>
        </Tooltip>
        &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
        &nbsp; &nbsp;
        <Tooltip placement="top-right" content="Ipsum is simply dummy text of">
          <Button>Top right</Button>
        </Tooltip>
      </div>
      <br /> <br /> <br />
      <br /> <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Tooltip placement="left" content="Ipsum is simply dummy text of">
          <Button>Left</Button>
        </Tooltip>
        &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
        &nbsp; &nbsp;
        <Tooltip placement="right" content="Ipsum is simply dummy text of">
          <Button>Right</Button>
        </Tooltip>
      </div>
      <br /> <br /> <br />
      <br /> <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Tooltip
          placement="bottom-left"
          content="Ipsum is simply dummy text of"
        >
          <Button>Bottom left</Button>
        </Tooltip>
        &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
        <Tooltip placement="bottom" content="Ipsum is simply dummy text of">
          <Button>Bottom</Button>
        </Tooltip>
        &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
        <Tooltip
          placement="bottom-right"
          content="Ipsum is simply dummy text of"
        >
          <Button>Bottom right</Button>
        </Tooltip>
      </div>
    </>
  ),
};

export default meta;
type Story = StoryObj<typeof Tooltip>;
