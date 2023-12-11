import NextLink from "next/link";

import { Link } from 'theme-ui';

export default function NavbarItem({ label, href }: {
  label: string
  href: string
}) {
  const mobile = "@media (max-width: 991px)";

  return (
    <li>
      <Link 
        as={NextLink} 
        variant="navlink" 
        href={href}
        sx={{ 
          [mobile]: { 
            "&::after": { bg: "transparent", transition: "none" }
          }
        }}
      >
        {label}
      </Link>
    </li>
  )
}
