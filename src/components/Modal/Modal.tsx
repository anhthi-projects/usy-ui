import { FC, ReactNode, memo } from "react";

import { createPortal } from "react-dom";

import { Button, ButtonType } from "@src/components/Button";
import { CloseCircleIcon } from "@src/components/Icon";

import {
  StyledHeaderTitle,
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
      <StyledHeaderTitle>{title}</StyledHeaderTitle>
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

type ModalProps = {
  isOpen: boolean;
  footer?: ReactNode;
  containerElement?: HTMLElement;
  className?: string;
  testId?: string;
} & ModalHeaderProps &
  ModalContentProps;

const Modal: FC<ModalProps> = ({
  isOpen,
  title,
  children,
  footer,
  containerElement = document.body,
  onClose,
  className,
}) => {
  const renderModal = () => {
    return (
      <StyledOverlay>
        <StyledModalContainer className={className}>
          <ModalHeader title={title} onClose={onClose} />
          <ModalContent>{children}</ModalContent>
          {footer}
        </StyledModalContainer>
      </StyledOverlay>
    );
  };

  return isOpen && createPortal(renderModal(), containerElement);
};

export default memo(Modal);
