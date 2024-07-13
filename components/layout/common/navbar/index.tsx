import type { ReactNode } from "react";

import type { ThemeUIStyleObject } from "@theme-ui/core";

interface NavbarProps {
  children?: ReactNode;
  ssx?: ThemeUIStyleObject;
}

export default function Navbar({ children, ssx }: NavbarProps) {
  return (
    <ul
      sx={{
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        gap: "40px",
        ...ssx,
      }}
    >
      {children}
    </ul>
  );
}
