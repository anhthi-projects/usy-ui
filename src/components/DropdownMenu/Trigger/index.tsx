import { FC, ReactNode } from "react";

import clsx from "clsx";

import { AngleDownIcon } from "@src/components/Icon";

import { ExtraCompProps } from "../../../types/extra-comp.props";

type PureTriggerProps = {
  hasBorder?: boolean;
  children: ReactNode;
};

type TriggerProps = PureTriggerProps & ExtraCompProps;

export const Trigger: FC<TriggerProps> = ({
  children,
  hasBorder,
  className,
  testId,
}) => {
  return (
    <div
      className={clsx(
        "usy-dropdown-trigger-container",
        {
          "has-border": hasBorder,
        },
        className
      )}
      data-testid={testId}
    >
      {children}
      <AngleDownIcon />
    </div>
  );
};
