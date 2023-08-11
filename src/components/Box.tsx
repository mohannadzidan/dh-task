import React, { CSSProperties, JSX } from "react";
import styled from "styled-components";
import ResponsiveValue from "../models/ResponsiveValue";

type CSSAttributeValue<T extends keyof CSSProperties> = CSSProperties[T];

type ResponsiveCSSAttribute<T extends keyof CSSProperties> = ResponsiveValue<
  CSSAttributeValue<T>
>;

type BoxBaseProps<
  T extends React.JSXElementConstructor<any> | keyof JSX.IntrinsicElements
> = {
  component: T;
} & React.PropsWithChildren &
  React.HTMLProps<T> &
  Partial<StylingProps>;

type SupportedCssAttribute = {
  name: string;
  attr: string;
};

type StylingProp<T extends keyof CSSProperties> =
  | ResponsiveCSSAttribute<T>
  | string
  | number;

type StylingProps = {
  flex: StylingProp<"flex">;
  display: StylingProp<"display">;
  direction: StylingProp<"flexDirection">;
  width: StylingProp<"width">;
  height: StylingProp<"height">;
  minHeight: StylingProp<"minHeight">;
  maxHeight: StylingProp<"maxHeight">;
  minWidth: StylingProp<"minWidth">;
  maxWidth: StylingProp<"maxWidth">;
  alignItems: StylingProp<"alignItems">;
  justifyContent: StylingProp<"justifyContent">;
  color: StylingProp<"color">;
  backgroundColor: StylingProp<"backgroundColor">;
  padding: StylingProp<"padding">;
  margin: StylingProp<"margin">;
  marginTop: StylingProp<"marginTop">;
  marginBottom: StylingProp<"marginBottom">;
};

const supportedCssAttrs: SupportedCssAttribute[] = [
  {
    name: "display",
    attr: "display",
  },
  {
    name: "direction",
    attr: "flex-direction",
  },

  {
    name: "flex",
    attr: "flex",
  },
  {
    name: "alignItems",
    attr: "align-items",
  },
  {
    name: "justifyContent",
    attr: "justify-content",
  },
  {
    name: "height",
    attr: "height",
  },
  {
    name: "width",
    attr: "width",
  },
  {
    name: "minHeight",
    attr: "min-height",
  },
  {
    name: "maxHeight",
    attr: "max-height",
  },
  {
    name: "minWidth",
    attr: "min-width",
  },
  {
    name: "maxWidth",
    attr: "max-width",
  },
  {
    name: "color",
    attr: "color",
  },
  {
    name: "backgroundColor",
    attr: "background-color",
  },
  {
    name: "padding",
    attr: "padding",
  },
  {
    name: "margin",
    attr: "margin",
  },
  {
    name: "marginBottom",
    attr: "margin-bottom",
  },
  {
    name: "marginTop",
    attr: "margin-top",
  },
];

function getPropsExceptCssAttrs(props: any) {
  const mp = { ...props };
  supportedCssAttrs.forEach((p) => {
    if (typeof mp[p.name] !== "undefined") {
      delete mp[p.name];
    }
  });
  return mp;
}

function BoxBase<
  T extends React.JSXElementConstructor<any> | keyof JSX.IntrinsicElements
>({ component, children, ...props }: BoxBaseProps<T>) {
  return React.createElement(component, props, children);
}

const BoxWrapper = styled((props: any) => (
  <BoxBase {...getPropsExceptCssAttrs(props)} />
))`
  ${(props: any) => {
    const cssProperties: string[] = [];
    supportedCssAttrs.forEach((a) => {
      if (typeof props[a.name] !== "object" && props[a.name]) {
        cssProperties.push(`${a.attr}: ${props[a.name]};`);
      }
    });
    return cssProperties.join("\n");
  }}

  ${(props: any) => {
    const cssProperties: string[] = [];
    supportedCssAttrs.forEach((a) => {
      if (typeof props[a.name] === "object" && props[a.name]["xs"]) {
        cssProperties.push(`${a.attr}: ${props[a.name]["xs"]};`);
      }
    });
    return cssProperties.join("\n");
  }}

  @media (min-width: 577px) {
    ${(props: any) => {
      const cssProperties: string[] = [];
      supportedCssAttrs.forEach((a) => {
        if (typeof props[a.name] === "object" && props[a.name]["sm"]) {
          cssProperties.push(`${a.attr}: ${props[a.name]["sm"]};`);
        }
      });
      return cssProperties.join("\n");
    }}
  }

  @media (min-width: 769px) {
    ${(props: any) => {
      const cssProperties: string[] = [];
      supportedCssAttrs.forEach((a) => {
        if (typeof props[a.name] === "object" && props[a.name]["md"]) {
          cssProperties.push(`${a.attr}: ${props[a.name]["md"]};`);
        }
      });
      return cssProperties.join("\n");
    }}
  }

  @media (min-width: 993px) {
    ${(props: any) => {
      const cssProperties: string[] = [];
      supportedCssAttrs.forEach((a) => {
        if (typeof props[a.name] === "object" && props[a.name]["lg"]) {
          cssProperties.push(`${a.attr}: ${props[a.name]["lg"]};`);
        }
      });
      return cssProperties.join("\n");
    }}
  }

  @media (min-width: 1201px) {
    ${(props: any) => {
      const cssProperties: string[] = [];
      supportedCssAttrs.forEach((a) => {
        if (typeof props[a.name] === "object" && props[a.name]["xl"]) {
          cssProperties.push(`${a.attr}: ${props[a.name]["xl"]};`);
        }
      });
      return cssProperties.join("\n");
    }}
  }
`;
export type BoxProps<T extends keyof JSX.IntrinsicElements = any> = Omit<
  BoxBaseProps<T>,
  "component"
> &
  Partial<BoxBaseProps<T>>;

function Box<T extends keyof JSX.IntrinsicElements = any>({
  component = "div",
  ...props
}: BoxProps<T>) {
  return <BoxWrapper component={component} {...props} />;
}

export default Box;
