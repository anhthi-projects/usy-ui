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
  StyledDrawerContainer,
  StyledDrawerContent,
  StyledDrawerFooter,
  StyledDrawerHeader,
  StyledOverlay,
} from "./Drawer.styled";

/**
 * Drawer Header
 */

interface DrawerHeaderProps {
  title: ReactNode;
  onClose: () => void;
}

export const DrawerHeader: FC<DrawerHeaderProps> = ({ title, onClose }) => {
  return (
    <StyledDrawerHeader>
      <Typography size="lg" hasBottomSpace={false}>
        {title}
      </Typography>
      <CloseCircleIcon width={20} height={20} onClick={onClose} />
    </StyledDrawerHeader>
  );
};

/**
 * Drawer Content
 */

interface DrawerContentProps {
  children: ReactNode;
}

export const DrawerContent: FC<DrawerContentProps> = ({ children }) => {
  return <StyledDrawerContent>{children}</StyledDrawerContent>;
};

/**
 * Drawer Footer
 */

interface DrawerButtonProps {
  label: string;
  type: ButtonType;
  onClick: () => void;
  testId?: string;
}

interface DrawerFooterProps {
  buttons: DrawerButtonProps[];
}

export const DrawerFooter: FC<DrawerFooterProps> = ({ buttons }) => {
  return (
    <StyledDrawerFooter>
      {(buttons || []).map(({ type, label, onClick, testId }) => (
        <Button key={label} type={type} onClick={onClick} data-testid={testId}>
          {label}
        </Button>
      ))}
    </StyledDrawerFooter>
  );
};

/**
 * Drawer Container
 */

export interface DrawerProps extends DrawerContentProps {
  isOpen: boolean;
  side?: "left" | "right";
  minWidth?: string;
  header?: ReactNode;
  footer?: ReactNode;
  containerElement?: HTMLElement;
  zIndex?: number;
  className?: string;
  testId?: string;
}

export const Drawer: FC<DrawerProps> = ({
  isOpen,
  side = "right",
  minWidth = "480px",
  header,
  children,
  footer,
  containerElement = document.body,
  zIndex = zIndexLevel.z50,
  className,
  testId,
}) => {
  const renderDrawer = () => (
    <StyledOverlay side={side} zIndex={zIndex}>
      <StyledDrawerContainer
        minWidth={minWidth}
        className={className}
        data-testid={testId}
      >
        {header}
        <DrawerContent>{children}</DrawerContent>
        {footer}
      </StyledDrawerContainer>
    </StyledOverlay>
  );

  return isOpen && createPortal(renderDrawer(), containerElement);
};
