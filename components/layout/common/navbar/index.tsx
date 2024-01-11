import type { FC, ReactNode } from "react"

import type { ThemeUIStyleObject } from "@theme-ui/core"

interface INavbarProps {
  children?: ReactNode
  ssx?: ThemeUIStyleObject
}

const Navbar: FC<INavbarProps> = ({ children, ssx }) => {
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

export default Navbar;