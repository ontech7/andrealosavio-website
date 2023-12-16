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
  },
  navlink: {
    position: "relative",
    display: "inline-block",
    textDecoration: "none",
    color: "white",
    fontWeight: 500,
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "3px",
      mb: "-5px",
      backgroundColor: "green",
      transform: "scale(0)",
      transition: "transform 0.3s ease-in-out"
    },
    "&:hover::after": {
      transformOrigin: "center",
      transform: "scale(1)"
    }
  }
}