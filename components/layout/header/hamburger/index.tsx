import HamburgerCloseIcon from './close'
import HamburgerOpenIcon from './open'

export default function HamburgerButton({
  isOpen,
  toggle
}: {
  isOpen: boolean,
  toggle: () => void
}) {
  return (
    <>

      <input 
        aria-label="Menu" 
        aria-expanded={isOpen ? "true" : "false"} 
        type="checkbox" 
        onChange={toggle}
        sx={{
          display: "block",
          cursor: "pointer",
          zIndex: 1002,
          position: "absolute",
          height: "20px",
          width: "26px",
          right: "20px",
          opacity: 0,
          margin: 0
        }}
      />

      {/** both included for animations */}
      <HamburgerOpenIcon isOpen={isOpen} />
      <HamburgerCloseIcon isOpen={isOpen} />
    
    </>
  )
}
