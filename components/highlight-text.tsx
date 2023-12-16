import React, { type ReactNode } from 'react'

import { Text, type ThemeUIStyleObject } from 'theme-ui'

export default function HighlightText({
  as,
  variant,
  color,
  children,
  ssx
}: {
  as?: React.ElementType<any>
  variant?: string
  color?: "green" | "yellow"
  children?: ReactNode
  ssx?: ThemeUIStyleObject
}) {
  return (
    <Text
      {...as ? { as } : {}}
      {...variant ? { variant } : {}}
      sx={{
        bg: color ?? "green",
        padding: "0 3px",
        ...ssx
      }}
    >
    
      {children}

    </Text>
  )
}
