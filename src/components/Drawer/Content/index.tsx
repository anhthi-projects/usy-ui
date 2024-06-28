import { FC, ReactNode } from "react";

import clsx from "clsx";

import { ExtraCompProps } from "@src/interfaces/extra-comp-props.interface";

type DrawerContentProps = {
  children: ReactNode;
} & ExtraCompProps;

export const DrawerContent: FC<DrawerContentProps> = ({
  children,
  className,
  testId,
}) => {
  return (
    <section
      className={clsx("usy-drawer-content-container", className)}
      data-testid={testId}
    >
      {children}
    </section>
  );
};
