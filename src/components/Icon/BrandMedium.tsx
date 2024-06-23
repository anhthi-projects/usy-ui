import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBrandMedium = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7 6a7 7 0 1 0 0 14A7 7 0 1 0 7 6m11 .5a3 6.5 0 1 0 0 13 3 6.5 0 1 0 0-13M23 8a1 5 0 1 0 0 10 1 5 0 1 0 0-10" />
  </svg>
);
export default SvgBrandMedium;
