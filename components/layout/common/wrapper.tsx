import type { ReactNode } from 'react';
import { Box, type ThemeUIStyleObject } from 'theme-ui';

export default function LayoutWrapper({ 
  children ,
  ssx
}: {
  children?: ReactNode
  ssx?: ThemeUIStyleObject
}) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "90%",
        width: 1200,
        margin: "0 auto",
        ...ssx
      }}
    >

      {children}

    </Box>
  )
}
