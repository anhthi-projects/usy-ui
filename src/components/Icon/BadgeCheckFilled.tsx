import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBadgeCheckFilled = ({
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
    className="badge-check-filled_svg__w-6 badge-check-filled_svg__h-6 badge-check-filled_svg__text-gray-800 badge-check-filled_svg__dark:text-white"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.99.99 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.99.99 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.99.99 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.99.99 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.99.99 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.99.99 0 0 1-.696-.288l-.893-.893A2.98 2.98 0 0 0 12 2m3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBadgeCheckFilled;