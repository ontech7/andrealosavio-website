import type { ThemeUIStyleObject } from "theme-ui"

export default function Navbar({ children, ssx }: {
  children: JSX.Element | JSX.Element[] | string
  ssx?: ThemeUIStyleObject
}) {
  return (
    <ul
      sx={{
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        gap: "40px",
        ...ssx
      }}
    >

      {children}

    </ul> 
  )
}
