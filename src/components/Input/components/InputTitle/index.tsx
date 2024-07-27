import { FC } from "react";

import { InputProps } from "../..";

export const InputTitle: FC<
  Pick<InputProps, "name" | "hasAsterisk" | "title" | "testId">
> = ({ name, hasAsterisk, title, testId }) => {
  return (
    title && (
      <label
        className="usy-input-title"
        htmlFor={name}
        data-testid={`${testId}-title`}
      >
        {title}
        {hasAsterisk && <span className="asterisk">*</span>}
      </label>
    )
  );
};
