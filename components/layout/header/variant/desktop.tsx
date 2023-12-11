import NextLink from "next/link";

import { Box, Link } from 'theme-ui';

import Navbar from "../navbar";
import NavbarItem from "../navbar/item";

import { menuVoicesMap } from "@/shared-data/navbar";

export default function HeaderDesktop() {
  const mobile = "@media (max-width: 991px)";

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: 1200,
        margin: "0 auto",
        padding: "15px 20px",
        [mobile]: { display: "none" }
      }}
    >

      <NextLink href="/" sx={{ height: 35 }}>
        <img 
          sx={{ height: "100%", width: "auto" }}
          src="/images/logo.svg" 
          alt="logo" 
          title="Andrea Losavio's website logo" 
        />
      </NextLink>

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

    </Box>
  )
}
