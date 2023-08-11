import { styled } from "styled-components";
import Box, { BoxProps } from "./Box";

export type CardProps = BoxProps;
const Card = styled(Box)<CardProps>`
  padding: 1rem;
  border-radius: 2rem;
  border: 1px solid #e2e2ea;
  color: ${({ theme }) => theme.colors.black};
  background-color: #fff;
`;

export default Card;
