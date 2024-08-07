import { Children, cloneElement, forwardRef, ReactElement } from "react";

import clsx from "clsx";

import { usyZIndex } from "@src/styles";
import { ExtraCompProps } from "@src/types/extra-comp.props";

type PureMenuOverlayProps = {
  zIndex?: number;
  children: ReactElement[];
};

type MenuOverlayProps = PureMenuOverlayProps &
  Partial<Pick<ExtraCompProps, "className" | "testId">>;

export const MenuOverlay = forwardRef<HTMLDivElement, MenuOverlayProps>(
  function MenuOverlay(
    { children, zIndex = usyZIndex.latest, className, testId },
    ref
  ) {
    return (
      <div
        className={clsx("usy-dropdown-menu-overlay-container", className)}
        style={{ zIndex }}
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
