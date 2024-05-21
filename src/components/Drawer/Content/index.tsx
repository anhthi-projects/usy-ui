import { FC, ReactNode } from "react";

import clsx from "clsx";

interface DrawerContentProps {
  children: ReactNode;
  testId?: string;
}

export const DrawerContent: FC<DrawerContentProps> = ({ children, testId }) => {
  return (
    <section
      className={clsx("usy-drawer-content-container")}
      data-testid={testId}
    >
      {children}
    </section>
  );
};
