import { FC, ReactNode, useState } from "react";

import clsx from "clsx";

import { ExtraCompProps } from "@src/interfaces/extra-comp-props.interface";

interface CheckboxProps extends ExtraCompProps {
  label: ReactNode;
  isChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const Checkbox: FC<CheckboxProps> = ({
  label,
  isChecked = false,
  onChange,
  className,
  testId = "",
}) => {
  const [checked, setChecked] = useState(isChecked);

  const handleCheck = () => {
    setChecked(!checked);
    onChange?.(!checked);
  };

  return (
    <label
      data-testid={testId}
      className={clsx("usy-checkbox-container", className)}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheck}
        className={clsx("input", {
          checked,
        })}
        data-testid={`${testId}-input`}
      />
      {label}
    </label>
  );
};
