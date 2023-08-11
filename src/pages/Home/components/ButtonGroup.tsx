import React from "react";
import { styled } from "styled-components";
import Typography from "../../../components/Typography";
import withMenu, { withMenuItem } from "../../../hocs/withMenu";
import ButtonBase, { ButtonBaseProps } from "../../../components/ButtonBase";
import { getCssProperty } from "../../../helpers/styles";
import Color from "color";

export type SelectProps = React.ComponentProps<"ul">;

const StyledSelect = styled.ul`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
`;

export interface SelectOptionProps extends ButtonBaseProps {
  lampColor: string;
}
export const StyledSelectOption = styled(
  ({ lampColor, variant, ...props }: any) => (
    <ButtonBase variant="li" {...props} />
  )
)<SelectOptionProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  transition: background 200ms;
  padding: 16px 5px;
  flex: 1;
  white-space: nowrap;
  &::before {
    content: "●";

    ${({ theme, lampColor }) =>
      getCssProperty("color", theme.colors[lampColor] || lampColor)};
  }
  &.active {
    background: ${({ theme }) => Color("#02a0fc").alpha(0.1).hexa()};
  }
`;

export const SelectOption = withMenuItem(StyledSelectOption);

function Select({ children, ...props }: Omit<SelectProps, "onChange">) {
  return <StyledSelect {...props}>{children}</StyledSelect>;
}

const ButtonGroup = withMenu(Select);

export default ButtonGroup;
