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

export interface InputProps extends ExtraCompProps {
  name?: string;
  value?: string;
  title?: string;
  type?: "text" | "number";
  maxWidth?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  placeholder?: string;
  description?: ReactNode;
  hasError?: boolean;
  onChange?: (value: string, e?: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (value: string, e?: FocusEvent<HTMLInputElement>) => void;
  formatOnChange?: (value: string) => string;
  formatOnBlur?: (value: string) => string;
}

export const Input: FC<InputProps> = ({
  name = getCurrentTime(),
  value = "",
  title,
  type = "text",
  maxWidth = "unset",
  iconLeft,
  iconRight,
  placeholder,
  description,
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
    onChange?.(formattedValue, e);
  };

  const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
    const formattedValue = formatOnBlur(e.target.value);
    setInnerValue(formattedValue);
    onBlur?.(formattedValue, e);
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
      <InputTitle name={name} title={title} testId={testId} />
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
