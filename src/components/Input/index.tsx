import { ChangeEvent, FC, FocusEvent, ReactNode } from "react";

import clsx from "clsx";

import { ExtraCompProps } from "@src/interfaces/extra-comp-props.interface";

interface InputProps extends ExtraCompProps {
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
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({
  name,
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
  className,
  testId,
}) => {
  const renderTitle = () =>
    title && (
      <label className="title" htmlFor={name} data-testid={`${testId}-title`}>
        {title}
      </label>
    );

  const renderDescription = () =>
    description && (
      <small className="description" data-testid={`${testId}-description`}>
        {description}
      </small>
    );

  const renderIconLeft = () =>
    iconLeft && (
      <span className="icon-left" data-testid={`${testId}-icon-left`}>
        {iconLeft}
      </span>
    );

  const renderIconRight = () =>
    iconRight && (
      <span className="icon-right" data-testid={`${testId}-icon-right`}>
        {iconRight}
      </span>
    );

  const renderInput = () => {
    return (
      <input
        id={name}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className="input"
        data-testid={`${testId}-input`}
      />
    );
  };

  return (
    <div className={clsx("usy-input-container", className)}>
      {renderTitle()}
      <div
        className={clsx("input-container", {
          "has-error": hasError,
        })}
        style={{ maxWidth }}
        data-testid={testId}
      >
        {renderIconLeft()}
        {renderInput()}
        {renderIconRight()}
      </div>
      {renderDescription()}
    </div>
  );
};
