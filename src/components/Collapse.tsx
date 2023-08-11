import React, { useLayoutEffect, useRef, useState } from "react";
import { styled } from "styled-components";

export interface CollapseProps extends React.ComponentProps<"div"> {
  open?: boolean;
  direction?: "horizontal" | "vertical";
  collapsedSize?: number;
}

const Wrapper = styled.div`
  overflow: hidden;
  transition: height 200ms, width 200ms;
`;
export default function Collapse({
  open = false,
  direction = "vertical",
  collapsedSize = 0,
  children,
  style,
  ...props
}: CollapseProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const dim = direction === "vertical" ? "height" : "width";
  const otherDim = dim === "width" ? "height" : "width";
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    const bounds = contentRef.current?.getBoundingClientRect();
    const size = bounds?.[dim] || 0;
    if (open) setSize(size);
    else setSize(collapsedSize);
  });
  return (
    <Wrapper style={{ [dim]: size, ...style }} {...props}>
      <div
        ref={contentRef}
        style={{
          display: direction === "vertical" ? "block" : "inline-block",
          [otherDim]: "100%",
        }}
      >
        {children}
      </div>
    </Wrapper>
  );
}
