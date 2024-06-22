import { FC } from "react";

import { InputProps } from ".";

export const InputTitle: FC<
  Pick<InputProps, "name" | "hasAsterisk" | "title" | "testId">
> = ({ name, hasAsterisk, title, testId }) => {
  return (
    title && (
      <label className="title" htmlFor={name} data-testid={`${testId}-title`}>
        {title}
        {hasAsterisk && <span className="asterisk">*</span>}
      </label>
    )
  );
};

export const InputDescription: FC<
  Pick<InputProps, "description" | "testId">
> = ({ description, testId }) => {
  return (
    description && (
      <small className="description" data-testid={`${testId}-description`}>
        {description}
      </small>
    )
  );
};

export const InputIconLeft: FC<Pick<InputProps, "iconLeft" | "testId">> = ({
  iconLeft,
  testId,
}) => {
  return (
    iconLeft && (
      <span className="icon-left" data-testid={`${testId}-icon-left`}>
        {iconLeft}
      </span>
    )
  );
};

export const InputIconRight: FC<Pick<InputProps, "iconRight" | "testId">> = ({
  iconRight,
  testId,
}) => {
  return (
    iconRight && (
      <span className="icon-right" data-testid={`${testId}-icon-right`}>
        {iconRight}
      </span>
    )
  );
};
