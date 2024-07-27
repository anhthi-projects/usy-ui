import { ChangeEvent, FocusEvent, forwardRef, useMemo, useState } from "react";

import clsx from "clsx";

import { ExtraCompProps } from "@src/types/extra-comp-props.type";
import { getCurrentTime } from "@src/utils";

import { InputProps } from "..";
import { InputDescription, InputTitle } from "../Input.components";

type TextAreaProps = Pick<
  InputProps,
  | "name"
  | "value"
  | "title"
  | "maxWidth"
  | "placeholder"
  | "description"
  | "hasAsterisk"
  | "hasError"
> & {
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>, value: string) => void;
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>, value: string) => void;
} & ExtraCompProps;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(
    {
      name,
      value = "",
      title,
      maxWidth = "unset",
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
    const [innerValue, setInnerValue] = useState(value);
    const nameMemo = useMemo(() => {
      return name || `input-${getCurrentTime()}`;
    }, [name]);

    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setInnerValue(e.target.value);
      onChange?.(e, e.target.value);
    };

    const handleOnBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
      setInnerValue(e.target.value);
      onBlur?.(e, e.target.value);
    };

    /**
     * Render
     */

    const renderTextArea = () => {
      return (
        <textarea
          ref={ref}
          id={nameMemo}
          name={nameMemo}
          value={innerValue}
          placeholder={placeholder}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        />
      );
    };

    return (
      <div className={clsx("usy-textarea-container", className)}>
        <InputTitle
          name={nameMemo}
          hasAsterisk={hasAsterisk}
          title={title}
          testId={testId}
        />
        <div
          className={clsx("input-textarea", {
            "has-error": hasError,
          })}
          style={{ maxWidth }}
          data-testid={testId}
        >
          {renderTextArea()}
        </div>
        <InputDescription description={description} testId={testId} />
      </div>
    );
  }
);