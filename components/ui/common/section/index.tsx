import type { ThemeUICSSObject, ThemeUIStyleObject } from '@theme-ui/core'
import type { FC, ReactNode } from 'react'

interface ISectionProps {
  id: string
  bg?: ThemeUICSSObject["bg"]
  high?: boolean
  children?: ReactNode
  ssx?: ThemeUIStyleObject
}

const Section: FC<ISectionProps> = (props) => {
  return (
    <section
      id={props.id}
      sx={{
        ...props.bg ? { background: props.bg } : {},
        position: "relative",
        padding: !props.high ? "40px 0" : "80px 0",
        overflowX: "hidden",
        ...props.ssx
      }}
    >

      {props.children}

    </section>
  )
}

export default Section;