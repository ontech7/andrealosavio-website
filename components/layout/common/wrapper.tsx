import type { ThemeUIStyleObject } from '@theme-ui/core';
import type { FC, ReactNode } from 'react';

interface ILayoutWrapperProps {
  children?: ReactNode
  ssx?: ThemeUIStyleObject
}

const LayoutWrapper: FC<ILayoutWrapperProps> = ({ children, ssx }) => {
  return (
    <div
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

    </div>
  )
}

export default LayoutWrapper;