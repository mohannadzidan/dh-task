import { styled } from "styled-components";
import Typography, { TypographyProps } from "./Typography";

export type ButtonBaseProps = TypographyProps;

const ButtonBase = styled((props: any) => (
  <Typography variant="button" {...props} />
))`
  outline: unset;
  border: unset;
  background: none;
  cursor: pointer;
`;

export default ButtonBase;
