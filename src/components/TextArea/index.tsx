import { ChangeEvent, FocusEvent, forwardRef, useMemo, useState } from "react";

import clsx from "clsx";

import { usyElements } from "@src/styles";
import { type ExtraCompProps } from "@src/types/extra-comp-props.type";
import { getCurrentTime } from "@src/utils";

import { PureInputProps } from "../Input";
import { InputDescription } from "../Input/components/InputDescription";
import { InputTitle } from "../Input/components/InputTitle";

type PickedInputProps = Pick<
  PureInputProps,
  | "name"
  | "value"
  | "title"
  | "maxWidth"
  | "placeholder"
  | "description"
  | "hasAsterisk"
  | "hasError"
>;

type MoreTextAreaProps = {
  maxHeight?: string;
  minHeight?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>, value: string) => void;
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>, value: string) => void;
};

type TextAreaProps = PickedInputProps &
  MoreTextAreaProps &
  Partial<Pick<ExtraCompProps, "ref" | "className" | "testId">>;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(
    {
      name,
      value = "",
      title,
      maxWidth = "unset",
      maxHeight = "200px",
      minHeight = usyElements.elementHeight,
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
          data-testid={testId}
          placeholder={placeholder}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          className={clsx("textarea", {
            "has-error": hasError,
          })}
          style={{ maxWidth, maxHeight, minHeight }}
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
        {renderTextArea()}
        <InputDescription description={description} testId={testId} />
      </div>
    );
  }
);
