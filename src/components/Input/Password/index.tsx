import { ChangeEvent, FC, FocusEvent, useState } from "react";

import clsx from "clsx";

import { EyeClosedIcon, EyeIcon } from "@src/components/Icon";

import { InputProps } from "..";
import {
  InputDescription,
  InputIconLeft,
  InputIconRight,
  InputTitle,
} from "../Input.components";

type PasswordProps = Pick<
  InputProps,
  | "name"
  | "value"
  | "title"
  | "maxWidth"
  | "iconLeft"
  | "placeholder"
  | "description"
  | "hasError"
  | "onChange"
  | "onBlur"
  | "className"
  | "testId"
>;

export const Password: FC<PasswordProps> = ({
  name,
  value,
  title,
  maxWidth,
  iconLeft,
  placeholder,
  description,
  hasError,
  onChange,
  onBlur,
  className,
  testId,
}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [innerValue, setInnerValue] = useState(value);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInnerValue(e.target.value);
    onChange?.(e.target.value, e);
  };

  const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
    setInnerValue(e.target.value);
    onBlur?.(e.target.value, e);
  };

  /**
   * Render
   */

  const renderInput = () => {
    return (
      <input
        type={hidePassword ? "password" : "text"}
        id={name}
        name={name}
        value={innerValue}
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
        <InputIconRight
          iconRight={
            hidePassword ? (
              <EyeIcon onClick={() => setHidePassword(false)} />
            ) : (
              <EyeClosedIcon onClick={() => setHidePassword(true)} />
            )
          }
          testId={testId}
        />
      </div>
      <InputDescription description={description} testId={testId} />
    </div>
  );
};
