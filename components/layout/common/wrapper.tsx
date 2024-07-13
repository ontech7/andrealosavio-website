import type { ThemeUIStyleObject } from "@theme-ui/core";
import type { ReactNode } from "react";

interface LayoutWrapperProps {
  children?: ReactNode;
  ssx?: ThemeUIStyleObject;
}

export default function LayoutWrapper({ children, ssx }: LayoutWrapperProps) {
  return (
    <div
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "90%",
        width: 1200,
        margin: "0 auto",
        ...ssx,
      }}
    >
      {children}
    </div>
  );
}
