
import type { ThemeUIStyleObject } from '@theme-ui/core'

import { FC } from 'react'
import type { BgName } from './types'
import { backgroundMap } from './utils'

interface IBackgroundProps {
  bgImg: BgName
  placement: "top" | "bottom"
  ssx?: ThemeUIStyleObject
}

const Background: FC<IBackgroundProps> = ({ bgImg, placement, ssx }) => {
  const BgComponent = backgroundMap[bgImg];

  return (
    <BgComponent
      ssx={{
        display: "block",
        transform: `rotate(${placement == "bottom" ? "0deg" : "180deg"})`,
        width: "100%",
        height: "100%",
        ...ssx
      }}
    />
  )
}

export default Background;