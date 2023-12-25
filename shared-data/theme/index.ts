import type { Theme } from "@theme-ui/core";

import { buttons } from "./css-properties/buttons";
import { colors } from "./css-properties/colors";
import { fontSizes } from "./css-properties/fontSizes";
import { fontWeights } from "./css-properties/fontWeights";
import { fonts } from "./css-properties/fonts";
import { text } from "./css-properties/text";

export const breakpoints = {
  tablet: "@media (max-width: 991px)",
  mobile: "@media (max-width: 768px)"
}

const theme: Theme = {
  fonts: fonts,
  fontSizes: fontSizes,
  fontWeights: fontWeights,
  text: text,
  colors: colors,
  buttons: buttons
}

export default theme;