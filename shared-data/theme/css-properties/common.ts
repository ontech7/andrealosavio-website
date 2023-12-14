import type { ThemeUICSSObject } from "theme-ui";

// button - link

export const buttonBaseProps: ThemeUICSSObject = {
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 25px",
  fontSize: "link",
  fontWeight: 700,
  textDecoration: "none",
  textTransform: "uppercase",
  borderRadius: "3px",
  fontFamily: "inherit"
}