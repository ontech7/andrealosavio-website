import type { Theme } from "theme-ui";

import { buttons } from "./css-properties/buttons";
import { colors } from "./css-properties/colors";
import { fontSizes } from "./css-properties/font-sizes";
import { fonts } from "./css-properties/fonts";
import { links } from "./css-properties/links";
import { text } from "./css-properties/text";

export const breakpoints = {
  tablet: "@media (max-width: 991px)",
  mobile: "@media (max-width: 768px)"
}

export const theme: Theme = {
  fonts: fonts,
  fontSizes: fontSizes,
  text: text,
  colors: colors,
  links: links,
  buttons: buttons
}