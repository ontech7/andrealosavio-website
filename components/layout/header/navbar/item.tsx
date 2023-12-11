import NextLink from "next/link";
import { useRouter } from "next/router";

import { Link } from 'theme-ui';

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
        as={NextLink} 
        variant="navlink" 
        href={href}
        sx={{ 
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
