import { FC, ReactNode } from "react";

import clsx from "clsx";
import { createPortal } from "react-dom";

import { CloseIcon } from "../Icon";

interface ModalProps {
  isOpen: boolean;
  title?: ReactNode;
  maxWidth?: string;
  containerElement?: HTMLElement;
  children: ReactNode;
  onClose?: () => void;
  zIndex?: number;
  className?: string;
  testId?: string;
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
