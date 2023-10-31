import { FC } from "react";

interface ToggleSectionProps {
  isExpand: boolean;
  onClick: (isExpand: boolean) => void;
}

export const ToggleSection: FC<ToggleSectionProps> = () => {
  return <div />;
};
