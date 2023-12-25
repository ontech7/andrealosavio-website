
import { useRouter } from "next/router";

import Link from "@/components/core/link";

export default function NavbarItem({ 
  label, 
  href, 
  noHover 
}: {
  label: string
  href: string
  noHover?: boolean
}) {
  const router = useRouter();
  const [path] = router.asPath.split(/(#|\?)/g);

  return (
    <li>
      <Link 
        variant="navlink" 
        href={href}
        ssx={{ 
          position: "relative",
          display: "inline-block",
          textDecoration: "none",
          color: "white",
          fontWeight: "medium",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "3px",
            mb: "-5px",
            backgroundColor: noHover ? "none" : "green",
            transform: path == href ? "scale(1)" : "scale(0)",
            transition: noHover ? "none" : "transform 0.3s ease-in-out"
          },
          "&:hover::after": {
            transformOrigin: "center",
            transform: "scale(1)"
          }
        }}
      >

        {label}
        
      </Link>
    </li>
  )
}
