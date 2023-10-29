import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRunningTimer = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle
      cx={50}
      cy={50}
      r={48}
      fill="none"
      stroke="#fff"
      strokeMiterlimit={10}
      strokeWidth={4}
    />
    <path
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={4}
      d="m50 50 35 .5"
    >
      <animateTransform
        attributeName="transform"
        dur="2s"
        from="0 50 50"
        repeatCount="indefinite"
        to="360 50 50"
        type="rotate"
      />
    </path>
    <path
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={4}
      d="m50 50-.5 24"
    >
      <animateTransform
        attributeName="transform"
        dur="15s"
        from="0 50 50"
        repeatCount="indefinite"
        to="360 50 50"
        type="rotate"
      />
    </path>
  </svg>
);
export default SvgRunningTimer;
