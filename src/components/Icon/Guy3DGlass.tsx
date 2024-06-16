import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGuy3DGlass = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="20px"
    height="20px"
    viewBox="0 0 729.847 729.848"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M649.348 363.352v-31.95c1.885-65.093-2.771-136.624-70.596-185.749-6.4-4.63-13.352-9.068-20.933-13.275-3.783-2.104-20.149-13.532-24.254-15.52C530.064 104.559 528.744 0 528.744 0s-60.848 82.434-236.99 93.311c0 0-157.236 8.26-188.121 75.417-17.969 39.056-23.959 76.034-22.625 123.657l.116 4.361c.282 10.633.577 21.625.577 33.246l.859 29.038c-19.214 19.984-33.22 58.128-15.481 130.89 7.927 31.861 28.654 59.334 53.626 72.508.603 1.846 1.244 3.795 1.911 5.848 12.313 37.799 35.22 108.176 71.736 152.209l7.773 9.363H528.91l7.761-9.326c31.129-37.35 53.151-103.404 69.223-151.631a281 281 0 0 0 .795-2.41c25.742-14.969 45.931-42.66 54.023-75.072 3.617-14.48 9.671-38.734 10.171-63.143.705-33.233-9.555-53.075-21.535-64.914m-504.3 151.605V366.598h439.784v148.359H420.965l-12.134-52.549h-87.783l-12.133 52.549zm419.404-229.036h32.501c.987 13.557 1.077 28.282.603 44.34v13.557h-142.96c19.675-23.408 57.55-57.897 109.856-57.897M443.5 284.625l-3.181 59.192H133.928l-.423-14.237c-.013-12.159-.308-23.369-.59-34.22C294.55 350.603 443.5 284.625 443.5 284.625m113.268 267.861c-12.62 37.863-31.077 93.246-52.92 125.529H227.072c-26.371-37.26-44.866-94.092-55.191-125.811-1.783-5.49-3.386-10.402-4.784-14.48h159.942l12.134-52.537h51.549l12.134 52.537H561.72l-.705 2.104c-1.36 3.975-2.771 8.207-4.247 12.658" />
    <path d="M161.132 391.377h138.15v98.262h-138.15zM545.777 414.336v52.33h-92.208v-52.33zm22.958-22.959H430.597v98.262h138.138z" />
  </svg>
);
export default SvgGuy3DGlass;