import { FC, ReactNode } from "react";

import clsx from "clsx";

import { CloseIcon } from "@src/components/Icon";
import { Typography } from "@src/components/Typography";
import { ExtraCompProps } from "@src/types/extra-comp-props.type";

type DrawerHeaderProps = {
  title: ReactNode;
  onClose?: () => void;
} & ExtraCompProps;

export const DrawerHeader: FC<DrawerHeaderProps> = ({
  title,
  onClose,
  className,
  testId = "",
}) => {
  return (
    <div
      className={clsx("usy-drawer-header-container", className)}
      data-testid={testId}
    >
      <Typography size="large" weight="semibold" testId={`${testId}-title`}>
        {title}
      </Typography>
      {onClose ? (
        <CloseIcon
          onClick={onClose}
          className="close-icon"
          data-testid={`${testId}-close`}
        />
      ) : (
        <span />
      )}
    </div>
  );
};
