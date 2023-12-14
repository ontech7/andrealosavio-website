import { Box, type ThemeUIStyleObject } from 'theme-ui'

export default function SectionWrapper({
  children,
  ssx
}: {
  children?: JSX.Element | JSX.Element[] | string
  ssx?: ThemeUIStyleObject
}) {
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "90%",
        width: 1200,
        margin: "0 auto",
        height: "100%",
        ...ssx
      }}
    >

      {children}

    </Box>
  )
}
