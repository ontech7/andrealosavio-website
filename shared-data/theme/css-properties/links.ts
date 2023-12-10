import { buttonBaseProps } from "./common";

import type { ThemeUICSSObject } from "theme-ui";

export const links: Record<string, ThemeUICSSObject> = {
  primary: {
    ...buttonBaseProps,
    bg: "green",
    color: "black"
  },
  secondary: {
    ...buttonBaseProps,
    bg: "yellow",
    color: "black"
  }
}