import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";

import Modal, { ModalFooter } from "./Modal";

const meta: Meta<typeof Modal> = {
  component: Modal,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
};

export const Primary: Story = {
  render: () => (
    <Modal
      isOpen
      title="Hello"
      onClose={() => alert("closed")}
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
