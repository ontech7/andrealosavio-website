export default function HamburgerCloseIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div 
      aria-hidden={!isOpen ? "true" : "false"}
      sx={{
        zIndex: 1001,
        display: "flex",
        position: !isOpen 
          ? "absolute" : "fixed",
        height: "20px",
        width: "26px",
        right: !isOpen ? 0 : "5%",
        flexDirection: "column",
        justifyContent: "space-between",

        "& > *": { 
          backgroundColor: "white",
          height: "2px",
          transition: "all 0.2s ease-in-out",
          transitionProperty: "width",
          width: !isOpen 
            ? "0%" : "100%",

          "&:nth-of-type(1)": { 
            transformOrigin: "0% 0%",
            transform: "rotate(45deg)",
            transitionDelay: !isOpen 
              ? "0.1s" : "0.6s"
          },

          "&:nth-of-type(2)": { 
            transformOrigin: "0% 100%",
            transform: "rotate(-45deg)",
            transitionDelay: !isOpen 
              ? "0.2s" : "0.5s"
          }
        }
      }}
    >
      <div /><div />
    </div>
  )
}
