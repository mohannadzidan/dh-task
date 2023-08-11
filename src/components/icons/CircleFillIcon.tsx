import React from "react";
import SvgIcon, { SvgIconProps } from "./SvgIcon";

export default function CircleFillIcon(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 59 59" fill="currentColor" {...props}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        strokeWidth={8}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={10}
        d="M30.16 7A22.2 22.2 0 0 0 8 29.16a22.2 22.2 0 0 0 22.16 22.17c4.62 0 8.91-1.43 12.71-4.02a22.03 22.03 0 0 0 9.46-18.15A22.2 22.2 0 0 0 30.16 7Z"
      />
    </SvgIcon>
  );
}
