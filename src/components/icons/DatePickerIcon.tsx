import React from "react";
import SvgIcon, { SvgIconProps } from "./SvgIcon";

export default function DatePickerIcon(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 13 13" {...props}>
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M 11.9997,12.5001 H 0.50040001 C 0.22447999,12.5001 0,12.275621 0,11.9997 V 1.6253999 C 0,1.3494799 0.22447999,1.125 0.50040001,1.125 H 3.1248 V 0.12509999 C 3.1248,0.05612 3.1809201,0 3.2499001,0 h 0.8748 c 0.06898,0 0.1251001,0.05612 0.1251001,0.12509999 V 1.125 H 8.2503004 V 0.12509999 C 8.2503004,0.05612 8.3064203,0 8.3754005,0 h 0.8747998 c 0.06898,0 0.1251001,0.05612 0.1251001,0.12509999 V 1.125 H 11.9997 c 0.275921,0 0.5004,0.2244799 0.5004,0.5003999 V 11.9997 c 0,0.275921 -0.224479,0.5004 -0.5004,0.5004 z M 1.125,5.4377999 V 11.3751 H 11.3751 V 5.4377999 Z M 1.125,2.25 V 4.3748999 H 11.3751 V 2.25 H 9.3753004 v 0.7497001 c 0,0.06898 -0.05612,0.1250999 -0.1251001,0.1250999 H 8.3754005 c -0.06898,0 -0.1251001,-0.05612 -0.1251001,-0.1250999 V 2.25 H 4.2498002 v 0.7497001 c 0,0.06898 -0.05612,0.1250999 -0.1251001,0.1250999 h -0.8748 C 3.1809201,3.1248 3.1248,3.06868 3.1248,2.9997001 V 2.25 Z"
      />
    </SvgIcon>
  );
}