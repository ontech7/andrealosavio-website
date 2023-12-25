import type { ReactNode } from 'react'

import type { ThemeUICSSObject, ThemeUIStyleObject } from '@theme-ui/core'

export default function Section({
  id,
  bg,
  high,
  children,
  ssx
}: {
  id: string
  bg?: ThemeUICSSObject["bg"]
  high?: boolean
  children?: ReactNode
  ssx?: ThemeUIStyleObject
}) {
  return (
    <section
      id={id}
      sx={{
        ...bg ? { background: bg } : {},
        position: "relative",
        padding: !high ? "40px 0" : "80px 0",
        overflowX: "hidden",
        ...ssx
      }}
    >

      {children}

    </section>
  )
}
