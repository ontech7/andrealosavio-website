import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

import LayoutLogo from "../../common/logo";
import Navbar from "../../common/navbar";
import NavbarItem from "../../common/navbar/item";
import LayoutWrapper from "../../common/wrapper";

import Link from "@/components/link";

import { menuVoicesMap } from "@/shared-data/constants/navbar/menu";
import { breakpoints } from "@/shared-data/theme";

export default function HeaderDesktop() {
  return (
    <LayoutWrapper
      ssx={{
        display: "flex",
        [breakpoints.tablet]: { display: "none" },
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
        variant="secondary"
        href="/contattami"
      >
        CONTATTAMI

        <ArrowRightCircleIcon 
          sx={{ color: "black", ml: 2 }} 
          width={24} 
        />
      </Link>

    </LayoutWrapper>
  )
}
