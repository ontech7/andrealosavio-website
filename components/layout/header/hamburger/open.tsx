export default function HamburgerOpenIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div 
      aria-hidden={isOpen ? "true" : "false"}
      sx={{
        zIndex: 1001,
        display: "flex",
        position: "absolute",
        height: "20px",
        width: "26px",
        right: 0,
        flexDirection: "column",
        justifyContent: "space-between",

        "& > *": { 
          backgroundColor: "white",
          height: "2px",
          transition: "all 0.2s ease-in-out", 
          transitionProperty: "width",
          width: !isOpen 
            ? "100%" : "0%",

          "&:nth-of-type(1)": { 
            transitionDelay: !isOpen 
              ? "0.6s" : "0.1s" 
          },
          "&:nth-of-type(2)": { 
            transitionDelay: !isOpen 
              ? "0.5s" : "0.2s" 
          },
          "&:nth-of-type(3)": { 
            transitionDelay: !isOpen 
              ? "0.4s" : "0.3s" 
          }
        }
      }}
    >
      <div /><div /><div />
    </div>
  )
}
