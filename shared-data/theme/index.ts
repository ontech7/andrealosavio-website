import type { Theme } from "theme-ui";

import { buttons } from "./css-properties/buttons";
import { colors } from "./css-properties/colors";
import { fontSizes } from "./css-properties/font-sizes";
import { links } from "./css-properties/links";
import { text } from "./css-properties/text";

export const theme: Theme = {
  fontSizes: fontSizes,
  text: text,
  colors: colors,
  links: links,
  buttons: buttons
}