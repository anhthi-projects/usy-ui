import { FC, ReactNode } from "react";

import { createPortal } from "react-dom";

import {
  Button,
  ButtonType,
  Typography,
  CloseCircleIcon,
} from "@src/components";
import { zIndexLevel } from "@src/styles";

import {
  StyledModalHeader,
  StyledModalContainer,
  StyledOverlay,
  StyledModalContent,
  StyledModalFooter,
} from "./Modal.styled";

/**
 * Modal Header
 */

interface ModalHeaderProps {
  title: ReactNode;
  onClose: () => void;
}

export const ModalHeader: FC<ModalHeaderProps> = ({ title, onClose }) => {
  return (
    <StyledModalHeader>
      <Typography size="lg">{title}</Typography>
      <CloseCircleIcon width={20} height={20} onClick={onClose} />
    </StyledModalHeader>
  );
};

/**
 * Modal Content
 */

interface ModalContentProps {
  children: ReactNode;
}

export const ModalContent: FC<ModalContentProps> = ({ children }) => {
  return <StyledModalContent>{children}</StyledModalContent>;
};

/**
 * Modal Footer
 */

interface ModalButtonProps {
  label: string;
  type: ButtonType;
  onClick: () => void;
  testId?: string;
}

interface ModalFooterProps {
  buttons: ModalButtonProps[];
}

export const ModalFooter: FC<ModalFooterProps> = ({ buttons }) => {
  return (
    <StyledModalFooter>
      {(buttons || []).map(({ type, label, onClick, testId }) => (
        <Button key={label} type={type} onClick={onClick} data-testid={testId}>
          {label}
        </Button>
      ))}
    </StyledModalFooter>
  );
};

/**
 * Modal Container
 */

export interface ModalProps extends ModalContentProps {
  isOpen: boolean;
  minWidth?: string;
  header: ReactNode;
  footer?: ReactNode;
  containerElement?: HTMLElement;
  zIndex?: number;
  className?: string;
  testId?: string;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  minWidth = "400px",
  header,
  children,
  footer,
  containerElement = document.body,
  zIndex = zIndexLevel.z50,
  className,
  testId,
}) => {
  const renderModal = () => {
    return (
      <StyledOverlay zIndex={zIndex}>
        <StyledModalContainer
          minWidth={minWidth}
          className={className}
          data-testid={testId}
        >
          {header}
          <ModalContent>{children}</ModalContent>
          {footer}
        </StyledModalContainer>
      </StyledOverlay>
    );
  };

  return isOpen && createPortal(renderModal(), containerElement);
};
