import { ChangeEvent, FC, FocusEvent, ReactNode, useState } from "react";

import clsx from "clsx";

import { ExtraCompProps } from "@src/interfaces/extra-comp-props.interface";
import { getCurrentTime } from "@src/utils/helpers";

import {
  InputDescription,
  InputIconLeft,
  InputIconRight,
  InputTitle,
} from "./Input.components";

export interface InputProps {
  name?: string;
  value?: string;
  title?: string;
  type?: "text" | "number";
  maxWidth?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  placeholder?: string;
  description?: ReactNode;
  hasAsterisk?: boolean;
  hasError?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>, value: string) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>, value: string) => void;
  formatOnChange?: (value: string) => string;
  formatOnBlur?: (value: string) => string;
}

export const Input: FC<InputProps & ExtraCompProps> = ({
  name = getCurrentTime(),
  value = "",
  title,
  type = "text",
  maxWidth = "unset",
  iconLeft,
  iconRight,
  placeholder,
  description,
  hasAsterisk = false,
  hasError = false,
  onChange,
  onBlur,
  formatOnChange = (value) => value,
  formatOnBlur = (value) => value,
  className,
  testId,
}) => {
  const [innerValue, setInnerValue] = useState(value);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatOnChange(e.target.value);
    setInnerValue(formattedValue);
    onChange?.(e, formattedValue);
  };

  const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
    const formattedValue = formatOnBlur(e.target.value);
    setInnerValue(formattedValue);
    onBlur?.(e, formattedValue);
  };

  /**
   * Render
   */

  const renderInput = () => {
    return (
      <input
        id={name}
        name={name}
        value={innerValue}
        type={type}
        placeholder={placeholder}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        className="input"
        data-testid={`${testId}-input`}
      />
    );
  };

  return (
    <div className={clsx("usy-input-container", className)}>
      <InputTitle
        name={name}
        hasAsterisk={hasAsterisk}
        title={title}
        testId={testId}
      />
      <div
        className={clsx("input-container", {
          "has-error": hasError,
        })}
        style={{ maxWidth }}
        data-testid={testId}
      >
        <InputIconLeft iconLeft={iconLeft} testId={testId} />
        {renderInput()}
        <InputIconRight iconRight={iconRight} testId={testId} />
      </div>
      <InputDescription description={description} testId={testId} />
    </div>
  );
};
