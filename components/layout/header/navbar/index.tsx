import type { ThemeUIStyleObject } from "theme-ui"

export default function Navbar({ children, extraSx }: {
  children: JSX.Element | JSX.Element[] | string
  extraSx?: ThemeUIStyleObject
}) {
  return (
    <ul
      sx={{
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        gap: "40px",
        ...extraSx
      }}
    >

      {children}

    </ul> 
  )
}
