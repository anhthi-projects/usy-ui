import { FC, useState } from "react";

import { CheckboxLabel, CheckboxInput } from "./Checkbox.styled";

interface CheckboxProps {
  label: string;
  isChecked?: boolean;
  testId?: string;
}

export const Checkbox: FC<CheckboxProps> = ({ label, isChecked, testId }) => {
  const [checked, setChecked] = useState(isChecked);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <CheckboxLabel data-testid={testId}>
      <CheckboxInput type="checkbox" checked={checked} onChange={handleCheck} />
      {label}
    </CheckboxLabel>
  );
};
