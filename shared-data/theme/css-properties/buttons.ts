import type { ThemeUICSSObject } from "@theme-ui/core";

const buttonBaseProps: ThemeUICSSObject = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 25px",
  fontSize: "link",
  fontWeight: "bold",
  textDecoration: "none",
  textTransform: "uppercase",
  borderRadius: "3px"
}

export const buttons: Record<string, ThemeUICSSObject> = {
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