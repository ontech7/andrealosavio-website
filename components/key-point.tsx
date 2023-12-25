import { keyframes } from '@emotion/react'
import { type ReactNode } from 'react'

import Text from './core/text'

import type { ThemeUIStyleObject } from '@theme-ui/core'

const underlineAnim = keyframes({ from: { width: 0 }, to: { width: "100%" }})

export default function KeyPoint({
  as,
  variant,
  color,
  delay,
  children,
  ssx
}: {
  as?: string
  variant?: string
  color?: "green" | "darkGreen"
  delay?: number
  children?: ReactNode
  ssx?: ThemeUIStyleObject
}) {
  return (
    <Text
      as={as ?? "span"}
      variant={variant}
      ssx={{
        position: "relative",
        display: "inline-block",

        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 0,
          height: "3px",
          backgroundColor: color ?? "green",
          transition: "width 300ms",
          animation: `${underlineAnim} 1s forwards ease-in-out`,
          ...delay ? { animationDelay: `${delay}ms` } : {}
        },

        ...ssx
      }}
    >
    
      {children}

    </Text>
  )
}
