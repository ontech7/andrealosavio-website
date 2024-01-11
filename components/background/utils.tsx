import type { FC } from 'react'

import type { BgName, IBgSvg } from './types'

import Bg_Blue from './svg/blue'
import Bg_BlueAndLight from "./svg/blue-and-light"
import Bg_Collaborazioni from './svg/collaborazioni'
import Bg_Hero from './svg/hero'
import Bg_Light from './svg/light'
import Bg_LightShort from './svg/light-short'
import Bg_SfumatoLight from './svg/sfumato-light'
import Bg_TriangleBlue from './svg/triangle-blue'

export const backgroundMap: Record<BgName, FC<IBgSvg>> = {
  "blue-and-light": Bg_BlueAndLight,
  "blue": Bg_Blue,
  "collaborazioni": Bg_Collaborazioni,
  "hero": Bg_Hero,
  "light-short": Bg_LightShort,
  "light": Bg_Light,
  "sfumato-light": Bg_SfumatoLight,
  "triangle-blue": Bg_TriangleBlue
}