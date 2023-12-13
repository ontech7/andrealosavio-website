import NextLink from "next/link";

import { Link } from 'theme-ui';

import LayoutLogo from "../../common/logo";
import Navbar from "../../common/navbar";
import NavbarItem from "../../common/navbar/item";
import LayoutWrapper from "../../common/wrapper";

import { menuVoicesMap } from "@/shared-data/navbar";

export default function HeaderDesktop() {
  const mobile = "@media (max-width: 991px)";

  return (
    <LayoutWrapper
      ssx={{
        display: "flex",
        [mobile]: { display: "none" },
      }}
    >

      <LayoutLogo />

      <Navbar>
        {menuVoicesMap
          .slice(0, -1)
          .map(([label, href]) =>

          <NavbarItem 
            key={label} 
            label={label} 
            href={href} 
          />

        )}
      </Navbar>

      <Link 
        as={NextLink}
        variant="secondary"
        href="/contattami"
      >
        CONTATTAMI
      </Link>

    </LayoutWrapper>
  )
}
