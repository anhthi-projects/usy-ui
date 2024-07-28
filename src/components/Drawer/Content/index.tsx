import { FC, ReactNode } from "react";

import clsx from "clsx";

import { ExtraCompProps } from "@src/types/extra-comp-props.type";

type DrawerContentProps = {
  children: ReactNode;
} & Partial<Pick<ExtraCompProps, "ref" | "className" | "testId">>;

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
