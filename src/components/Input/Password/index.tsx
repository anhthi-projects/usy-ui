import { ChangeEvent, FocusEvent, forwardRef, useMemo, useState } from "react";

import clsx from "clsx";

import { EyeClosedIcon, EyeIcon } from "@src/components/Icon";
import { ExtraCompProps } from "@src/types/extra-comp-props.type";
import { getCurrentTime } from "@src/utils/helpers";

import { PureInputProps } from "..";
import { InputDescription } from "../components/InputDescription";
import { InputIconLeft } from "../components/InputIconLeft";
import { InputIconRight } from "../components/InputIconRight";
import { InputTitle } from "../components/InputTitle";

type PasswordProps = Pick<
  PureInputProps,
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

export const Password = forwardRef<HTMLInputElement, PasswordProps>(
  function Password(
    {
      name,
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
    },
    ref
  ) {
    const [hidePassword, setHidePassword] = useState(true);
    const [innerValue, setInnerValue] = useState(value);

    const nameMemo = useMemo(() => {
      return name || `password-${getCurrentTime()}`;
    }, [name]);

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
          ref={ref}
          id={nameMemo}
          name={nameMemo}
          type={hidePassword ? "password" : "text"}
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
  }
);
