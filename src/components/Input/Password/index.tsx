import { ChangeEvent, FocusEvent, forwardRef, useState } from "react";

import clsx from "clsx";

import { EyeSlashIcon, EyeIcon } from "@src/components/Icon";
import { useFieldName } from "@src/hooks/useFieldName";
import { ExtraCompProps } from "@src/types/extra-comp.props";

import { PureInputProps } from "..";
import { FieldTitle } from "../../FieldTitle";
import { InputDescription } from "../components/InputDescription";
import { InputIconLeft } from "../components/InputIconLeft";
import { InputIconRight } from "../components/InputIconRight";

type PickedInputProps = Pick<
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
>;

type PasswordProps = PickedInputProps &
  Partial<Pick<ExtraCompProps, "className" | "testId">>;

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

    const { nameMemo } = useFieldName(name, "password");

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
        {title && (
          <FieldTitle
            name={nameMemo}
            hasAsterisk={hasAsterisk}
            title={title}
            testId={`${testId}-title`}
          />
        )}
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
                <EyeSlashIcon
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
