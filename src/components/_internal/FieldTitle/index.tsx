import { FC } from "react";

import clsx from "clsx";

import { ExtraCompProps } from "@src/types/extra-comp.props";

export type PureFieldTitleProps = {
  name?: string;
  title?: string;
  hasAsterisk?: boolean;
};

type FieldTitleProps = PureFieldTitleProps &
  Partial<Pick<ExtraCompProps, "className" | "testId">>;

export const FieldTitle: FC<FieldTitleProps> = ({
  name,
  hasAsterisk,
  title,
  className,
  testId,
}) => {
  return (
    title && (
      <label
        className={clsx("usy-field-title-container", className)}
        htmlFor={name}
        data-testid={testId}
      >
        {title}
        {hasAsterisk && <span className="asterisk">*</span>}
      </label>
    )
  );
};
