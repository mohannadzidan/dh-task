import React from "react";
import { useTheme } from "styled-components";

export interface SvgIconProps extends React.ComponentPropsWithRef<"svg"> {
  size?: number;
  color?: string;
}

export default function SvgIcon({
  width,
  height,
  size,
  viewBox,
  color,
  ...props
}: SvgIconProps) {
  const theme = useTheme();
  const [x, y, w, h] = (viewBox || "0 0 1 1").match(/\d+/g) as string[];
  const ratio = +h / +w;
  const isSizeSpecified = typeof size === "number";
  const s = isSizeSpecified ? size : 1;
  const unit = isSizeSpecified ? "" : "em";
  return (
    <svg
      width={s + unit}
      height={s * ratio + unit}
      viewBox={viewBox}
      style={color ? { color: theme.colors[color] || color } : undefined}
      {...props}
    />
  );
}
