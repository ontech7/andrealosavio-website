import type { FC, ReactNode } from 'react';

interface IPortfolioOverlayProps {
  children?: ReactNode
}

const PortfolioOverlay: FC<IPortfolioOverlayProps> = ({ children }) => {
  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "48px",
        position: "absolute",
        zIndex: -1,
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        bg: "#05386b40",
        backdropFilter: "blur(8px)",
        opacity: 0,
        transition: "opacity 0.3s ease",
        "&:hover": {
          opacity: 1
        }
      }}
    >

      {children}

    </div>
  )
}

export default PortfolioOverlay;