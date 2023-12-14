import { breakpoints } from '@/shared-data/theme'
import { Box, type ThemeUIStyleObject } from 'theme-ui'

export default function FooterWrapper({
  children,
  ssx
}: {
  children?: JSX.Element | JSX.Element[] | string
  ssx?: ThemeUIStyleObject
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        width: "100%",
        columnGap: "20px",
        [breakpoints.tablet]: {
          flexDirection: "column",
          alignItems: "flex-start"
        },
        ...ssx
      }}
    >

      {children}

    </Box>
  )
}
