import type { ThemeUICSSObject, ThemeUIStyleObject } from '@theme-ui/core'
import type { FC, ReactNode } from 'react'

import { breakpoints } from '@/shared-data/theme'

/**
 * [0] Desktop
 * [1] Mobile (max-width: 768px)
*/
type FlexDirectionDevice = [
  ThemeUICSSObject["flexDirection"]?,
  ThemeUICSSObject["flexDirection"]?
]

interface ISectionWrapperProps {
  direction?: FlexDirectionDevice
  children?: ReactNode
  ssx?: ThemeUIStyleObject
}

const SectionWrapper: FC<ISectionWrapperProps> = ({ direction, children, ssx }) => {
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

export default SectionWrapper;