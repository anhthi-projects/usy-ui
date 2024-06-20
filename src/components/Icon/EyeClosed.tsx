import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEyeClosed = ({
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
      fill="#1C274C"
      fillRule="evenodd"
      d="M22.295 6.31a.75.75 0 0 1 .394.986L22 7l.69.296v.001l-.002.003-.003.007-.01.024-.039.084a13.858 13.858 0 0 1-.727 1.321 15 15 0 0 1-1.846 2.394l.968.969a.75.75 0 0 1-1.06 1.06l-1.001-1a11.6 11.6 0 0 1-2.274 1.497l.934 1.435a.75.75 0 1 1-1.258.818l-1.089-1.674c-.78.255-1.623.428-2.532.49V16.5a.75.75 0 0 1-1.5 0v-1.775c-.881-.06-1.7-.225-2.46-.466l-1.074 1.65a.75.75 0 1 1-1.258-.818l.913-1.402a11.5 11.5 0 0 1-2.293-1.49l-.96.96a.75.75 0 0 1-1.061-1.06l.924-.924A15 15 0 0 1 1.514 7.72a10 10 0 0 1-.188-.388l-.01-.025-.004-.007v-.003H1.31L2 7l-.69.296a.75.75 0 0 1 1.379-.592v.002l.007.014.029.063q.04.086.125.255a13.273 13.273 0 0 0 2.706 3.584c.866.805 1.927 1.546 3.196 2.034A9 9 0 0 0 12 13.25a9 9 0 0 0 3.312-.619c1.262-.497 2.316-1.243 3.175-2.049a13.3 13.3 0 0 0 2.789-3.8l.028-.063.006-.013v-.001m.985-.394a.75.75 0 0 0-.984.394zM2.69 6.704"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEyeClosed;
