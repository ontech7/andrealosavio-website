import { keyframes } from '@emotion/react'
import React from 'react'
import { Text, type ThemeUIStyleObject } from 'theme-ui'

const underlineAnim = keyframes({ from: { width: 0 }, to: { width: "100%" }})

export default function KeyPoint({
  as,
  variant,
  color,
  delay,
  children,
  ssx
}: {
  as?: React.ElementType<any>
  variant?: string
  color?: "green" | "dark-green"
  delay?: number
  children?: JSX.Element | JSX.Element[] | string
  ssx?: ThemeUIStyleObject
}) {
  return (
    <Text
      {...as ? { as } : {}}
      {...variant ? { variant } : {}}
      sx={{
        position: "relative",
        display: "inline-block",

        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 0,
          height: "3px",
          marginBottom: "-2px",
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