import { FC } from "react";

import clsx from "clsx";

import { Button, ButtonType } from "@src/components/Button";
import { ExtraCompProps } from "@src/interfaces/extra-comp-props.interface";

interface DrawerButtonProps {
  label: string;
  type: ButtonType;
  onClick: () => void;
  testId?: string;
}

interface DrawerFooterProps {
  alignContent?: "left" | "center" | "right";
  buttons: DrawerButtonProps[];
}

export const DrawerFooter: FC<DrawerFooterProps & ExtraCompProps> = ({
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
