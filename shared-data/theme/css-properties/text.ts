import type { ThemeUICSSObject } from "theme-ui";

export const text: Record<string, ThemeUICSSObject> = {
  h1: { fontSize: "60px", fontWeight: 700, color: "yellow"},
  h2: { fontSize: "45px", fontWeight: 600, color: "black" },
  h2_special: { fontSize: "40px", fontWeight: 500, color: "grey"},
  h3: { fontSize: "30px", fontWeight: 600, color: "black" },
  paragraph: { fontSize: "18px", fontWeight: 400, lineHeight: "27px", color: "white" }
}