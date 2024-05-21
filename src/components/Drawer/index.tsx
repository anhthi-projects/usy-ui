import { FC, ReactNode } from "react";

import clsx from "clsx";
import { createPortal } from "react-dom";

export { DrawerHeader } from "./Header";
export { DrawerContent } from "./Content";
export { DrawerFooter } from "./Footer";

interface DrawerProps {
  isOpen?: boolean;
  side?: "left" | "right";
  maxWidth?: string;
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  containerElement?: HTMLElement;
  zIndex?: number;
  className?: string;
  testId?: string;
}

export const Drawer: FC<DrawerProps> = ({
  isOpen,
  side = "right",
  maxWidth = "480px",
  header,
  children,
  footer,
  containerElement = document.body,
  zIndex = 900,
  className,
  testId = "",
}) => {
  const renderDrawer = () => {
    return (
      <div
        className={clsx("usy-drawer-overlay", `pos-${side}`)}
        style={{ zIndex }}
        data-testid={`${testId}-overlay`}
      >
        <div
          className={clsx("usy-drawer-container", className)}
          style={{ maxWidth }}
          data-testid={testId}
        >
          {header}
          {children}
          {footer}
        </div>
      </div>
    );
  };

  return isOpen && createPortal(renderDrawer(), containerElement);
};
