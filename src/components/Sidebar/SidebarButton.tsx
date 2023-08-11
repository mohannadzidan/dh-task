import { styled } from "styled-components";
import ButtonBase from "../ButtonBase";
import Color from "color";

const SidebarButton = styled(ButtonBase)`
  transition: background-color 200ms;
  border-radius: 6px;
  text-align: start;
  padding: 12px 8px;
  width: 100%;
  &:hover {
    background-color: ${({ theme }) =>
      Color('#02a0fc').alpha(0.1).hexa()};
  }
`;

export default SidebarButton;
