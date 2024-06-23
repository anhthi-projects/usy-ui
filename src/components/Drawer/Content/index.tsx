import { FC, ReactNode } from "react";

import clsx from "clsx";

import { ExtraCompProps } from "@src/interfaces/extra-comp-props.interface";

interface DrawerContentProps {
  children: ReactNode;
}

export const DrawerContent: FC<DrawerContentProps & ExtraCompProps> = ({
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
