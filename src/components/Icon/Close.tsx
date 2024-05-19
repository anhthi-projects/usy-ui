import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgClose = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    viewBox="0 0 48 48"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M38.982 6.97a2 2 0 0 0-1.396.616L24 21.172 10.414 7.586A2 2 0 0 0 8.98 6.98a2 2 0 0 0-1.393 3.434L21.172 24 7.586 37.586a2 2 0 1 0 2.828 2.828L24 26.828l13.586 13.586a2 2 0 1 0 2.828-2.828L26.828 24l13.586-13.586a2 2 0 0 0-1.432-3.443"
    />
  </svg>
);
export default SvgClose;
