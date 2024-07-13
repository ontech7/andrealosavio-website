import CopyrightText from "../common/copyright";
import LayoutLogo from "../common/logo";
import Navbar from "../common/navbar";
import NavbarItem from "../common/navbar/item";
import SocialLinks from "../common/socials";
import LayoutWrapper from "../common/wrapper";
import FooterWrapper from "./wrapper";

import { menuVoicesMap } from "@/shared-data/constants/navbar/menu";
import { breakpoints } from "@/shared-data/theme";

export default function Footer() {
  return (
    <footer sx={{ bg: "blue", p: "40px 0" }}>
      <LayoutWrapper ssx={{ flexDirection: "column" }}>
        <FooterWrapper ssx={{ rowGap: "40px", mb: "40px" }}>
          <LayoutLogo />
          <Navbar
            ssx={{
              [breakpoints.tablet]: { flexDirection: "column", gap: "20px" },
            }}
          >
            {menuVoicesMap.map(([label, href]) => (
              <NavbarItem key={label} label={label} href={href} noHover />
            ))}
          </Navbar>
        </FooterWrapper>

        <FooterWrapper ssx={{ rowGap: "20px" }}>
          <CopyrightText />
          <SocialLinks ssx={{ alignSelf: "flex-end" }} />
        </FooterWrapper>
      </LayoutWrapper>
    </footer>
  );
}
