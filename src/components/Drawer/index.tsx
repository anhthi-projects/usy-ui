import { FC, ReactNode, useEffect } from "react";

import clsx from "clsx";
import { createPortal } from "react-dom";

import { ExtraCompProps } from "@src/interfaces/extra-comp-props.interface";

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
}

export const Drawer: FC<DrawerProps & ExtraCompProps> = ({
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
  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    return () => {
      enableScroll();
    };
  }, []);

  useEffect(() => {
    isOpen ? disableScroll() : enableScroll();
  }, [isOpen]);

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
