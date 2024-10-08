import { FC, ReactNode } from "react";

import clsx from "clsx";

import { ExtraCompProps } from "../../../../types/extra-comp.props";

export type MenuItem = {
  label: ReactNode;
  onClick?: () => void;
};

type MenuItemProps = MenuItem & ExtraCompProps;

export const MenuItem: FC<MenuItemProps> = ({ className, testId, ...item }) => {
  return (
    <li
      onClick={item.onClick}
      aria-hidden="true"
      className={clsx("usy-dropdown-menu-item-container", className)}
      data-testid={testId}
    >
      {item.label}
    </li>
  );
};
