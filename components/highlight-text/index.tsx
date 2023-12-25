import { type ReactNode } from 'react'

import type { ThemeUIStyleObject } from '@theme-ui/core'

import Text from '../core/text'

import customHighlightSvg from "./images/custom-highlight-green.svg"

export default function HighlightText({
  as,
  variant,
  color,
  bg,
  children,
  ssx
}: {
  as?: string
  variant?: string
  color?: string
  bg?: "green" | "yellow" | "custom"
  children?: ReactNode
  ssx?: ThemeUIStyleObject
}) {
  const isCustom = bg == "custom";

  return (
    <Text
      as={as ?? "span"}
      variant={variant}
      color={color ?? "black"}
      ssx={{
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
