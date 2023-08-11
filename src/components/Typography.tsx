import React from "react";
import { CSSProperties } from "react";
import styled from "styled-components";
import { getCssProperty, getUnitizedProperty } from "../helpers/styles";

const TypographyVariants = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "span",
  "p",
  "a",
  "div",
  "caption",
] as const;

export type TypographyVariant = (typeof TypographyVariants)[number];

export interface TypographyProps
  extends React.ComponentProps<any>,
    Pick<
      CSSProperties,
      "fontSize" | "fontWeight" | "fontFamily" | "fontStyle" | "flex"
    > {
  variant?: TypographyVariant;
  color?: string;
  marginBottom?: string | number;
  marginTop?: string | number;
}

function TypographyBase({
  variant = "div",
  fontSize,
  fontFamily,
  fontWeight,
  fontStyle,
  color,
  marginBottom,
  marginTop,
  flex,
  ...props
}: TypographyProps) {
  return React.createElement(variant, { ...props });
}

const Typography = styled(TypographyBase)<TypographyProps>`
  font-size: ${({ fontSize, variant, theme }) => {
    if (!fontSize) {
      fontSize =
        (theme.components?.[variant as string]?.fontSize || theme.fontSize) /
          theme.fontSize +
        "rem";
    } else if (typeof fontSize === "string") {
      fontSize = fontSize.match(/\d+\w+$/)
        ? fontSize
        : Number.parseInt(fontSize) / theme.fontSize + "rem";
    } else {
      fontSize = fontSize / theme.fontSize + "rem";
    }
    return fontSize;
  }};
  font-weight: ${({ variant, theme, fontWeight }) =>
    fontWeight || theme.components?.[variant as string]?.fontWeight || 400};
  font-family: ${(props) =>
    props.fontFamily ||
    props.theme.components?.[props.variant as string]?.fontFamily ||
    "Cairo, Poppins, Arial, sans-serif"};
  ${({ fontStyle }) => getCssProperty("font-style", fontStyle)}
  ${({ color, theme }) =>
    getCssProperty("color", theme.colors[color as string] || color)}
  ${({ marginBottom }) => getUnitizedProperty("margin-bottom", marginBottom)}
  ${({ marginTop }) => getUnitizedProperty("margin-top", marginTop)}
  ${({ flex }) => getUnitizedProperty("flex", flex)}
`;

export default Typography;
