import Color from "color";
import { styled } from "styled-components";

const Divider = styled.hr`
  border-color: ${({ theme }) =>
    Color(theme.colors.secondary).alpha(0.1).hexa()};
  margin: 54px;
`;

export default Divider;
