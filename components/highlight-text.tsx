import { keyframes } from '@emotion/react'
import React from 'react'
import { Text, type ThemeUIStyleObject } from 'theme-ui'

const underlineAnim = keyframes({ from: { width: 0 }, to: { width: "100%" }})

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
  children?: JSX.Element | JSX.Element[] | string
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
