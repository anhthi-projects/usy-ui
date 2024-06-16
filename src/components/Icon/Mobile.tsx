import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMobile = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 18h.01M11 6h2M9.2 21h5.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C18 19.48 18 18.92 18 17.8V6.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C16.48 3 15.92 3 14.8 3H9.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C6 4.52 6 5.08 6 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C7.52 21 8.08 21 9.2 21"
    />
  </svg>
);
export default SvgMobile;
