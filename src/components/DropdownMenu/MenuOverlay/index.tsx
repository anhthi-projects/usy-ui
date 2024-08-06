import { Children, cloneElement, forwardRef, ReactElement } from "react";

import clsx from "clsx";

import { ExtraCompProps } from "@src/types/extra-comp.props";

type PureMenuOverlayProps = {
  children: ReactElement[];
};

type MenuOverlayProps = PureMenuOverlayProps &
  Partial<Pick<ExtraCompProps, "className" | "testId">>;

export const MenuOverlay = forwardRef<HTMLDivElement, MenuOverlayProps>(
  function MenuOverlay({ className, testId, children }, ref) {
    return (
      <div
        className={clsx("usy-dropdown-menu-overlay-container", className)}
        data-testid={testId}
        ref={ref}
      >
        <ul>
          {Children.map(children, (child, index) => {
            return cloneElement(child, {
              key: `menu-item-${index}`,
            });
          })}
        </ul>
      </div>
    );
  }
);

MenuOverlay.displayName = "MenuOverlay";
