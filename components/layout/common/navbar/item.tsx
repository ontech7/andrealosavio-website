
import { useRouter } from "next/router";

import Link from "@/components/link";

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
  const [path] = router.asPath.split("#");

  return (
    <li>
      <Link 
        variant="navlink" 
        href={href}
        ssx={{ 
          "&::after": {
            ...path == href ? { transform: "scale(1)" } : {},
            ...noHover ? { bg: "transparent", transition: "none" } : {}
          }
        }}
      >

        {label}
        
      </Link>
    </li>
  )
}
