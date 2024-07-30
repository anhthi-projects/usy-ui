import {
  ChangeEvent,
  FocusEvent,
  ReactNode,
  forwardRef,
  useMemo,
  useState,
} from "react";

import clsx from "clsx";

import { ExtraCompProps } from "@src/types/extra-comp.props";
import { getCurrentTime } from "@src/utils/helpers";

import { InputDescription } from "./components/InputDescription";
import { InputIconLeft } from "./components/InputIconLeft";
import { InputIconRight } from "./components/InputIconRight";
import { InputTitle } from "./components/InputTitle";

export type PureInputProps = {
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
};

export type InputProps = PureInputProps &
  Partial<Pick<ExtraCompProps, "ref" | "className" | "testId">>;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    name,
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
  },
  ref
) {
  const [innerValue, setInnerValue] = useState(value);
  const nameMemo = useMemo(() => {
    return name || `input-${getCurrentTime()}`;
  }, [name]);

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
        ref={ref}
        id={nameMemo}
        name={nameMemo}
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
        name={nameMemo}
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
});
