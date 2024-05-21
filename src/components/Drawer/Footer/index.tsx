import { FC } from "react";

import clsx from "clsx";

import { Button, ButtonType } from "@src/components/Button";

interface DrawerButtonProps {
  label: string;
  type: ButtonType;
  onClick: () => void;
  testId?: string;
}

interface DrawerFooterProps {
  alignContent?: "left" | "center" | "right";
  buttons: DrawerButtonProps[];
  testId?: string;
}

export const DrawerFooter: FC<DrawerFooterProps> = ({
  alignContent = "right",
  buttons,
  testId,
}) => {
  return (
    <div
      className={clsx(
        "usy-drawer-footer-container",
        `align-content-${alignContent}`
      )}
      data-testid={testId}
    >
      {(buttons || []).map(({ type, label, onClick, testId: buttonTestId }) => (
        <Button
          key={label}
          type={type}
          onClick={onClick}
          className={clsx("cta-button")}
          testId={buttonTestId}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};
