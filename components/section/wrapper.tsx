import type { ReactNode } from 'react'

import { breakpoints } from '@/shared-data/theme'
import type { ThemeUICSSObject, ThemeUIStyleObject } from '@theme-ui/core'

/**
 * [0] Desktop
 * [1] Mobile (max-width: 768px)
*/
type FlexDirectionDevice = [
  ThemeUICSSObject["flexDirection"]?,
  ThemeUICSSObject["flexDirection"]?
]

export default function SectionWrapper({
  direction,
  children,
  ssx
}: {
  direction?: FlexDirectionDevice
  children?: ReactNode
  ssx?: ThemeUIStyleObject
}) {
  const desktop = direction?.[0];
  const mobile = direction?.[1];

  return (
    <div
      sx={{
        display: "flex",
        position: "relative",
        maxWidth: "90%",
        width: 1200,
        margin: "0 auto",
        height: "100%",
        ...desktop && { flexDirection: desktop },
        ...mobile && { [breakpoints.mobile]: { flexDirection: mobile } },
        ...ssx
      }}
    >

      {children}

    </div>
  )
}
