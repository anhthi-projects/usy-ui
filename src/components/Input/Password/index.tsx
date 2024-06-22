import { ChangeEvent, FC, FocusEvent, useState } from "react";

import clsx from "clsx";

import { EyeClosedIcon, EyeIcon } from "@src/components/Icon";
import { ExtraCompProps } from "@src/interfaces/extra-comp-props.interface";
import { getCurrentTime } from "@src/utils/helpers";

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
  | "hasAsterisk"
  | "hasError"
  | "onChange"
  | "onBlur"
> &
  ExtraCompProps;

export const Password: FC<PasswordProps> = ({
  name = getCurrentTime(),
  value = "",
  title,
  maxWidth = "unset",
  iconLeft,
  placeholder,
  description,
  hasAsterisk = false,
  hasError = false,
  onChange,
  onBlur,
  className,
  testId,
}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [innerValue, setInnerValue] = useState(value);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInnerValue(e.target.value);
    onChange?.(e, e.target.value);
  };

  const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
    setInnerValue(e.target.value);
    onBlur?.(e, e.target.value);
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
        <InputIconRight
          iconRight={
            hidePassword ? (
              <EyeIcon
                onClick={() => setHidePassword(false)}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <EyeClosedIcon
                onClick={() => setHidePassword(true)}
                style={{ cursor: "pointer" }}
              />
            )
          }
          testId={testId}
        />
      </div>
      <InputDescription description={description} testId={testId} />
    </div>
  );
};
