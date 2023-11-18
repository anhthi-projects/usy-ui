import { FC, ReactNode, useState } from "react";

import {
  ContentTypography,
  TooltipContainer,
  TooltipContent,
  TooltipPopover,
} from "./Tooltip.styled";

export interface TooltipProps {
  type?: "primary" | "black" | "white";
  placement?:
    | "top-left"
    | "top"
    | "top-right"
    | "right"
    | "bottom-right"
    | "bottom"
    | "bottom-left"
    | "left";
  content: string | ReactNode;
  children: ReactNode;
  zIndex?: string;
}

export const Tooltip: FC<TooltipProps> = ({
  type = "black",
  placement = "top",
  content,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderContent = () => {
    if (typeof content === "string") {
      return (
        <ContentTypography hasBottomSpace={false}>{content}</ContentTypography>
      );
    }

    return content;
  };

  return (
    <TooltipContainer
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {isOpen && (
        <TooltipPopover type={type} placement={placement}>
          <TooltipContent type={type} placement={placement}>
            {renderContent()}
          </TooltipContent>
        </TooltipPopover>
      )}
      {children}
    </TooltipContainer>
  );
};
