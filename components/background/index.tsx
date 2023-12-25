import Image from 'next/image'

import type { ThemeUIStyleObject } from '@theme-ui/core'

import type { BackgroundName } from './types'

export default function Background({
  bgImg,
  placement,
  ssx
}: {
  bgImg: BackgroundName
  placement: "top" | "bottom"
  ssx?: ThemeUIStyleObject
}) {
  return (
    <Image
      src={require(`./images/${bgImg}.svg`)}
      alt=""
      sx={{
        transform: `rotate(${placement == "bottom" ? "0deg" : "180deg"})`,
        mt: "-1px", mb: "-1px",
        ...ssx
      }}
    />
  )
}
