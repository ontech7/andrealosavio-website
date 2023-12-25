import type { ThemeUICSSObject } from "@theme-ui/core";

export const text: Record<string, ThemeUICSSObject> = {
  h1: { 
    fontSize: "h1", 
    fontWeight: "bold", 
    color: "yellow"
  },
  h2: { 
    fontSize: "h2", 
    fontWeight: "semiBold", 
    color: "black" 
  },
  h2_special: { 
    fontSize: "h2_special", 
    fontWeight: "medium", 
    color: "grey"
  },
  h3: { 
    fontSize: "h3", 
    fontWeight: "semiBold", 
    color: "black" 
  },
  p: { 
    fontSize: "body", 
    fontWeight: "regular", 
    lineHeight: "27px", 
    color: "white" 
  }
}