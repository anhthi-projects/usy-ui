import { FC, ReactNode, useEffect } from "react";

import clsx from "clsx";
import { createPortal } from "react-dom";

import { ExtraCompProps } from "@src/interfaces/extra-comp-props.interface";

import { CloseIcon } from "../Icon";

interface ModalProps extends ExtraCompProps {
  isOpen: boolean;
  title?: ReactNode;
  maxWidth?: string;
  containerElement?: HTMLElement;
  children: ReactNode;
  onClose?: () => void;
  zIndex?: number;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  title,
  maxWidth = "500px",
  containerElement = document.body,
  children,
  onClose,
  zIndex,
  className,
  testId,
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

  const renderModal = () => {
    const renderCloseIcon = () => {
      if (typeof onClose !== "function") {
        return null;
      }

      return (
        <CloseIcon
          onClick={onClose}
          className="header-close"
          data-testid={`${testId}-header-close`}
        />
      );
    };

    const renderTitle = () => {
      if (!title) {
        return null;
      }

      return (
        <h4 className="header-title" data-testid={`${testId}-header-title`}>
          {title}
        </h4>
      );
    };

    return (
      <div className={clsx("usy-modal-overlay")} style={{ zIndex }}>
        <div
          className={clsx("usy-modal-container", className)}
          style={{ maxWidth }}
          data-testid={testId}
        >
          {renderCloseIcon()}
          {renderTitle()}
          {children}
        </div>
      </div>
    );
  };

  return isOpen && createPortal(renderModal(), containerElement);
};
