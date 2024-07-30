import { FC, useMemo } from "react";

import clsx from "clsx";

import { usyColors } from "@src/styles";
import { ExtraCompProps } from "@src/types/extra-comp.props";
import { getRandomColor } from "@src/utils";

type AvatarProps = {
  url: string;
  alt: string;
  fallback?: string;
  variant?: "circle" | "rounded";
  size?: "extra-small" | "small" | "medium" | "large" | "extra-large";
  onClick?: () => void;
} & Partial<Pick<ExtraCompProps, "className" | "testId">>;

export const Avatar: FC<AvatarProps> = ({
  url,
  alt,
  fallback = "A",
  variant = "rounded",
  size = "medium",
  onClick,
  className,
  testId,
}) => {
  const sizeClassName = `size-${size}`;
  const variantClassName = `variant-${variant}`;

  const bgColor = useMemo(() => getRandomColor(), []);

  return (
    <div
      role="button"
      aria-hidden="true"
      title={url ? alt : fallback}
      onClick={onClick}
      className={clsx(
        "usy-avatar-container",
        {
          [sizeClassName]: Boolean(size),
          [variantClassName]: Boolean(variant),
        },
        className
      )}
      style={{
        backgroundColor: bgColor,
        color: usyColors.white,
        cursor: onClick ? "pointer" : undefined,
      }}
      data-testid={testId}
    >
      {url ? (
        <img src={url} alt={alt} className="image" />
      ) : (
        fallback[0].toUpperCase()
      )}
    </div>
  );
};
