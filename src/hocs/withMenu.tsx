import classNames from "classnames";
import React, { createContext, useContext } from "react";

export interface MenuProps {
  value?: any;
  onChange?(v: any): void;
}

export interface MenuItemProps {
  value?: any;
  onClick?: (ev: any) => void;
  active?: boolean;
}

interface ContextProperties {
  value?: any;
  setValue(v: any): void;
}
export const MenuContext = createContext<ContextProperties>({
  value: "",
  setValue(v) {},
});

export interface SliderSelectorProps<T>
  extends Omit<React.HTMLProps<HTMLDivElement>, "onChange"> {
  value?: any;
  onChange?(v: any): void;
}

export default function withMenu<T extends React.PropsWithChildren>(
  C: React.FunctionComponent<T>
) {
  return ({ value, onChange = () => {}, ...props }: T & MenuProps) => {
    return (
      <MenuContext.Provider value={{ value, setValue: onChange }}>
        <C {...props}>{props.children}</C>
      </MenuContext.Provider>
    );
  };
}

export function withMenuItem<
  T extends React.PropsWithChildren & MenuItemProps & React.HTMLProps<any>
>(C: React.FunctionComponent<T>): React.FunctionComponent<T & MenuItemProps> {
  return ({
    onClick,
    children,
    className,
    value,
    ...props
  }: T & MenuItemProps) => {
    const { value: currentValue, setValue } = useContext(MenuContext);
    return (
      <C
        className={classNames(
          { active: value === currentValue },
          className
        )}
        onClick={(ev) => {
          if (value) setValue(value);
          onClick?.(ev);
        }}
        {...props}
      >
        {children}
      </C>
    );
  };
}
