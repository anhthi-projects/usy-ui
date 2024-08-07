import { FC, ReactNode, useState } from "react";

import clsx from "clsx";

import { useFieldName } from "@src/hooks/useFieldName";
import { useOutsideClick } from "@src/hooks/useOutsideClick";
import { ExtraCompProps } from "@src/types/extra-comp.props";

import { FieldTitle, PureFieldTitleProps } from "../FieldTitle";
import { CaretDownIcon } from "../Icon";

export type SelectItem = {
  label: ReactNode;
  value: string | number;
};

type PureSelectProps = {
  items: SelectItem[];
  isOpen?: boolean;
  value?: SelectItem;
  onChange?: (item: SelectItem) => void;
};

type SelectProps = PureSelectProps &
  PureFieldTitleProps &
  Partial<Pick<ExtraCompProps, "className" | "testId">>;

export const Select: FC<SelectProps> = ({
  name,
  items = [],
  isOpen: initOpen,
  title,
  value,
  hasAsterisk,
  onChange,
  className,
  testId,
}) => {
  const [isOpen, setIsOpen] = useState(initOpen || false);
  const [selectedItem, setSelectedItem] = useState<SelectItem>(
    value || items[0]
  );

  const { nameMemo } = useFieldName(name, "select");

  const handleOutsideClick = () => {
    setIsOpen(false);
  };

  const { triggerRef, elementRef } = useOutsideClick(handleOutsideClick);

  const toggleSelect = () => setIsOpen(!isOpen);
  const handleChange = (item: SelectItem) => {
    setSelectedItem(item);
    onChange?.(item);
    setIsOpen(false);
  };

  /**
   * Render
   */

  const renderDisplayField = () => {
    return (
      <div
        className="field-container"
        aria-hidden="true"
        onClick={toggleSelect}
        ref={triggerRef}
      >
        {selectedItem.label}
        <CaretDownIcon />
      </div>
    );
  };

  const renderMenuOverlay = () => {
    if (!isOpen) {
      return;
    }

    return (
      <div className="menu-overlay" ref={elementRef}>
        <ul>
          {items.map((item) => {
            return (
              <li
                key={item.value}
                onClick={() => handleChange(item)}
                aria-hidden="true"
                className="item-container"
              >
                <p className="item-label">{item.label}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div
      className={clsx("usy-select-container", className)}
      data-testid={testId}
    >
      {title && (
        <FieldTitle
          name={nameMemo}
          hasAsterisk={hasAsterisk}
          title={title}
          testId={`${testId}-title`}
        />
      )}
      {renderDisplayField()}
      {renderMenuOverlay()}
    </div>
  );
};
