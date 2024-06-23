import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWarningCircleFilled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="currentColor"
    aria-hidden="true"
    className="warning-circle-filled_svg__w-6 warning-circle-filled_svg__h-6 warning-circle-filled_svg__text-gray-800 warning-circle-filled_svg__dark:text-white"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0zm-1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWarningCircleFilled;
