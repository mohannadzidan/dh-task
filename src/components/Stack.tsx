import { styled } from "styled-components";
import Box, { BoxProps } from "./Box";
import { getCssProperty } from "../helpers/styles";

export type StackProps = BoxProps & {
  spacing?: number;
};

const Wrapper = styled(({ spacing, ...props }: any) => <Box {...props} />)`
  ${({ spacing = 0 }) =>
    spacing > 0 ? getCssProperty("gap", spacing * 8 + "px") : ""}
`;

export default function Stack({
  component = "div",
  display = "flex",
  direction = "column",
  ...props
}: StackProps) {
  return (
    <Wrapper
      component={component}
      display={display}
      direction={direction}
      {...props}
    />
  );
}
