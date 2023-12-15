import { Box, type ThemeUIStyleObject } from 'theme-ui'

import { breakpoints } from '@/shared-data/theme'

export default function HalfBox({
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
        flexDirection: "column",
        gap: "25px",
        width: "50%",
        height: "inherit", 
        [breakpoints.mobile]: { width: "100%" },
        ...ssx
      }}
    >

      {children}

    </Box>
  )
}
