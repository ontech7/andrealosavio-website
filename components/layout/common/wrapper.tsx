import { Box, ThemeUIStyleObject } from 'theme-ui';

export default function LayoutWrapper({ 
  children ,
  ssx
}: {
  children: JSX.Element | JSX.Element[] | string
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
