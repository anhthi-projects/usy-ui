import { FC, ReactNode, useState } from "react";

import clsx from "clsx";

import { ExtraCompProps } from "@src/types/extra-comp.props";

import { CaretDownIcon } from "../Icon";

export type ToggleSectionProps = {
  title: ReactNode;
  isExpand?: boolean;
  maxWidth?: string;
  maxContentHeight?: string;
  children: ReactNode;
  onToggle?: (isExpand: boolean) => void;
} & Partial<Pick<ExtraCompProps, "ref" | "className" | "testId">>;

export const ToggleSection: FC<ToggleSectionProps> = ({
  title,
  isExpand: isDefExpand = false,
  maxWidth,
  maxContentHeight = "unset",
  children,
  onToggle,
  className,
  testId,
}) => {
  const [isExpand, setIsExpand] = useState(isDefExpand);

  const handleToggle = () => {
    setIsExpand(!isExpand);
    onToggle?.(!isExpand);
  };

  return (
    <div
      className={clsx(
        "usy-toggle-section-container",
        {
          "is-expanded": isExpand,
        },
        className
      )}
      style={{ maxWidth }}
      data-testid={testId}
    >
      <div
        className="usy-toggle-section-header"
        data-testid={`${testId}-header`}
      >
        <label className="title" data-testid={`${testId}-header-title`}>
          {title}
        </label>
        <CaretDownIcon
          onClick={handleToggle}
          className={clsx("arrow-icon", {
            "is-expanded": isExpand,
          })}
          data-testid={`${testId}-header-toggle`}
        />
      </div>
      <div
        className={clsx("usy-toggle-section-content")}
        style={{ maxHeight: maxContentHeight }}
        data-testid={`${testId}-content`}
      >
        {children}
      </div>
    </div>
  );
};
