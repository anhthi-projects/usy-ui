import { FC } from "react";

import clsx from "clsx";

import { Button, ButtonType } from "@src/components/Button";

import { ExtraCompProps } from "../../../types/extra-comp.props";

interface DrawerButtonProps {
  label: string;
  type: ButtonType;
  onClick: () => void;
  testId?: string;
}
type DrawerFooterProps = {
  alignContent?: "left" | "center" | "right";
  buttons: DrawerButtonProps[];
} & ExtraCompProps;

export const DrawerFooter: FC<DrawerFooterProps> = ({
  alignContent = "right",
  buttons,
  className,
  testId,
}) => {
  return (
    <div
      className={clsx(
        "usy-drawer-footer-container",
        `align-content-${alignContent}`,
        className
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
