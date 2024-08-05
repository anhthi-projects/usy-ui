import { FC, ReactNode, useState } from "react";

import clsx from "clsx";

import { ExtraCompProps } from "@src/types/extra-comp.props";

type DropdownItem = {
  label: string;
  value: string;
};

type PureDropdownProps = {
  isOpen?: boolean;
  items: DropdownItem[];
  children: ReactNode;
  onClick?: (item: DropdownItem) => void;
};

type DropdownProps = PureDropdownProps &
  Partial<Pick<ExtraCompProps, "className" | "testId">>;

export const Dropdown: FC<DropdownProps> = ({
  items = [],
  isOpen: initOpen,
  children,
  onClick,
  className,
  testId,
}) => {
  const [isOpen, setIsOpen] = useState(initOpen || false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div
      className={clsx("usy-dropdown-container", className)}
      data-testid={testId}
    >
      <div
        className="children-container"
        onClick={toggleDropdown}
        aria-hidden="true"
      >
        {children}
      </div>
      {isOpen && (
        <div className="dropdown-overlay">
          <ul>
            {items.map((item) => {
              return (
                <li
                  key={item.value}
                  onClick={() => onClick?.(item)}
                  aria-hidden="true"
                  className="item-container"
                >
                  <p className="item-label">{item.label}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
