import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";

import { Modal, ModalFooter, ModalHeader } from "./Modal";

const meta: Meta<typeof Modal> = {
  component: Modal,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "fullscreen",
  },
};

export const Component: Story = {
  render: () => (
    <Modal
      isOpen
      header={<ModalHeader title="Hello" onClose={() => alert("closed")} />}
      footer={
        <ModalFooter
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
      Something went wrong
    </Modal>
  ),
};

export default meta;
type Story = StoryObj<typeof Modal>;
