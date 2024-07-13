import type { ReactNode } from "react";

import { breakpoints } from "@/shared-data/theme";
import type { ThemeUIStyleObject } from "@theme-ui/core";

export default function FooterWrapper({
  children,
  ssx,
}: {
  children?: ReactNode;
  ssx?: ThemeUIStyleObject;
}) {
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        width: "100%",
        columnGap: "20px",
        [breakpoints.tablet]: {
          flexDirection: "column",
          alignItems: "flex-start",
        },
        ...ssx,
      }}
    >
      {children}
    </div>
  );
}
