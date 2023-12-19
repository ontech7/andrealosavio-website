import React, { type ReactNode } from 'react'

import { Text, ThemeUICSSObject, type ThemeUIStyleObject } from 'theme-ui'

import customHighlightSvg from "./images/custom-highlight-green.svg"

export default function HighlightText({
  as,
  variant,
  color,
  bg,
  children,
  ssx
}: {
  as?: React.ElementType<any>
  variant?: string
  color?: ThemeUICSSObject["color"]
  bg?: "green" | "yellow" | "custom"
  children?: ReactNode
  ssx?: ThemeUIStyleObject
}) {
  const isCustom = bg == "custom";

  return (
    <Text
      {...as && { as }}
      {...variant && { variant }}
      sx={{
        color: color ?? "black",

        ...!isCustom ? {
          bg: bg ?? "green",
          padding: "0 3px"
        } : {
          backgroundImage: `url(${customHighlightSvg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          width: "100%",
          padding: "10px"
        },

        ...ssx
      }}
    >
    
      {children}

    </Text>
  )
}
