import React, { useState } from "react";
import Collapse from "../Collapse";
import SidebarButton from "./SidebarButton";
import Stack from "../Stack";
import ArrowUp from "../icons/ArrowUp";
import { styled } from "styled-components";
import Typography from "../Typography";
import classNames from "classnames";

const SidebarSectionHeader = styled(SidebarButton)`
  & .SidebarSectionHeader-arrow {
    transition: transform 200ms;
  }
  &.collapsed .SidebarSectionHeader-arrow {
    transform: rotate(180deg);
  }
`;

export interface SidebarSectionProps extends React.PropsWithChildren {
  name: string;
}
export default function SidebarSection({
  name,
  children,
}: SidebarSectionProps) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <SidebarSectionHeader
        onClick={() => setOpen((p) => !p)}
        className={classNames({ collapsed: !open })}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6">{name}</Typography>
          <ArrowUp className="SidebarSectionHeader-arrow" size={12} />
        </Stack>
      </SidebarSectionHeader>
      <Collapse open={open}>{children}</Collapse>
    </>
  );
}
