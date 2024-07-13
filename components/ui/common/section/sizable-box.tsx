import type { ThemeUICSSObject, ThemeUIStyleObject } from "@theme-ui/core";
import type { ReactNode } from "react";

import { breakpoints } from "@/shared-data/theme";

/**
 * [0] Desktop
 * [1] Tablet (max-width: 991px)
 * [2] Mobile (max-width: 768px)
 */
type WidthDevice = [
  ThemeUICSSObject["width"]?,
  ThemeUICSSObject["width"]?,
  ThemeUICSSObject["width"]?
];

interface SizableBoxProps {
  width?: WidthDevice;
  children?: ReactNode;
  ssx?: ThemeUIStyleObject;
}

export default function SizableBox({ width, children, ssx }: SizableBoxProps) {
  const desktop = width?.[0];
  const tablet = width?.[1];
  const mobile = width?.[2];

  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        height: "inherit",
        width: !desktop ? "50%" : desktop,
        [breakpoints.tablet]: { width: !tablet ? "50%" : tablet },
        [breakpoints.mobile]: { width: !mobile ? "100%" : mobile },
        ...ssx,
      }}
    >
      {children}
    </div>
  );
}
