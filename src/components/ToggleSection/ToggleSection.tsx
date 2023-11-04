import { FC, ReactNode, useState } from "react";

import {
  StyledArrowHeadDownIcon,
  StyledToggleSectionContainer,
  StyledToggleSectionContent,
  StyledToggleSectionHeader,
} from "./ToggleSection.styled";

interface ToggleSectionProps {
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
    <StyledToggleSectionContainer className={className} data-testid={testId}>
      <StyledToggleSectionHeader>
        {title}
        <StyledArrowHeadDownIcon isExpand={isExpand} onClick={handleToggle} />
      </StyledToggleSectionHeader>
      <StyledToggleSectionContent>{children}</StyledToggleSectionContent>
    </StyledToggleSectionContainer>
  );
};
