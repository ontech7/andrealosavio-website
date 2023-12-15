import Image from 'next/image'

import type { ThemeUIStyleObject } from 'theme-ui'

import { breakpoints } from '@/shared-data/theme'
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
  const isBottom = placement == "bottom";

  return (
    <Image
      src={require(`./images/${bgImg}.svg`)}
      alt=""
      sx={{
        transform: `rotate(${isBottom ? "0deg" : "180deg"})`,
        [breakpoints.tablet]: { mt: "-1px", mb: "-1px" },
        ...ssx
      }}
    />
  )
}
