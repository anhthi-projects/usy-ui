import { FC, ReactNode, useState } from "react";

import { Typography } from "@src/components/Typography";

import {
  StyledArrowHeadDownIcon,
  StyledToggleSectionContainer,
  StyledToggleSectionContent,
  StyledToggleSectionHeader,
} from "./ToggleSection.styled";

export interface ToggleSectionProps {
  title: ReactNode;
  children: ReactNode;
  isExpandDefault?: boolean;
  onClick?: (isExpand: boolean) => void;
  className?: string;
  testId?: string;
}

export const ToggleSection: FC<ToggleSectionProps> = ({
  title,
  children,
  isExpandDefault = false,
  onClick,
  className,
  testId,
}) => {
  const [isExpand, setIsExpand] = useState(isExpandDefault);

  const handleToggle = () => {
    setIsExpand(!isExpand);
    onClick?.(!isExpand);
  };

  return (
    <StyledToggleSectionContainer
      isExpand={isExpand}
      className={className}
      data-testid={testId}
    >
      <StyledToggleSectionHeader>
        <Typography size="md" fontWeight={600} hasBottomSpace={false}>
          {title}
        </Typography>
        <StyledArrowHeadDownIcon
          width={20}
          height={20}
          isExpand={isExpand}
          onClick={handleToggle}
        />
      </StyledToggleSectionHeader>
      <StyledToggleSectionContent>{children}</StyledToggleSectionContent>
    </StyledToggleSectionContainer>
  );
};
