import { breakpoints } from '@/shared-data/theme'
import { Box, type ThemeUICSSObject, type ThemeUIStyleObject } from 'theme-ui'

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
  children?: JSX.Element | JSX.Element[] | string
  ssx?: ThemeUIStyleObject
}) {
  return (
    <Box
      id={id}
      as="section"
      {...bg ? { bg } : {}} 
      sx={{
        position: "relative",
        padding: !high ? "40px 0" : "80px 0",
        overflowX: "hidden",
        [breakpoints.mobile]: { padding: "20px 0 "},
        ...ssx
      }}
    >

      {children}

    </Box>
  )
}
