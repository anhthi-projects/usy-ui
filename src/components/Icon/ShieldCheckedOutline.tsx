import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShieldCheckedOutline = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="none"
    aria-hidden="true"
    className="shield-checked-outline_svg__w-6 shield-checked-outline_svg__h-6 shield-checked-outline_svg__text-gray-800 shield-checked-outline_svg__dark:text-white"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.5 11.5 11 13l4-3.5M12 20a16.4 16.4 0 0 1-5.092-5.804A16.7 16.7 0 0 1 5 6.666L12 4l7 2.667a16.7 16.7 0 0 1-1.908 7.529A16.4 16.4 0 0 1 12 20"
    />
  </svg>
);
export default SvgShieldCheckedOutline;
