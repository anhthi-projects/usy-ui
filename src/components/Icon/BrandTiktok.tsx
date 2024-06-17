import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBrandTiktok = ({
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
    <path d="M6 3C4.355 3 3 4.355 3 6v12c0 1.645 1.355 3 3 3h12c1.645 0 3-1.355 3-3V6c0-1.645-1.355-3-3-3zm6 4h2c0 1.005 1.471 2 2 2v2c-.605 0-1.332-.266-2-.715V14c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3v2a1.001 1.001 0 0 0 0 2c.552 0 1-.449 1-1z" />
  </svg>
);
export default SvgBrandTiktok;
