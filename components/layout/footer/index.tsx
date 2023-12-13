
import { menuVoicesMap } from '@/shared-data/navbar';
import { Box } from 'theme-ui';
import CopyrightText from '../common/copyright';
import LayoutLogo from "../common/logo";
import Navbar from '../common/navbar';
import NavbarItem from '../common/navbar/item';
import SocialLinks from '../common/socials';
import LayoutWrapper from '../common/wrapper';

export default function Footer() {
  const mobile = "@media (max-width: 991px)";

  return (
    <Box as="footer" bg="blue" p="40px 0">

      <LayoutWrapper ssx={{ flexDirection: "column" }}>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: "100%",
            columnGap: "20px",
            rowGap: "40px",
            mb: "40px",
            [mobile]: {
              flexDirection: "column",
              alignItems: "flex-start"
            }
          }}
        >

          <LayoutLogo />

          <Navbar
            ssx={{
              [mobile]: { flexDirection: "column", gap: "20px" }
            }}
          >
            {menuVoicesMap
              .map(([label, href]) =>

              <NavbarItem 
                key={label} 
                label={label} 
                href={href} 
                noHover
              />

            )}
          </Navbar>

        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: "100%",
            columnGap: "20px",
            rowGap: "20px",
            [mobile]: {
              flexDirection: "column",
              alignItems: "flex-start"
            }
          }}
        >

          <CopyrightText />

          <SocialLinks ssx={{ alignSelf: "flex-end" }} />

        </Box>

      </LayoutWrapper>

    </Box>
  )
}
