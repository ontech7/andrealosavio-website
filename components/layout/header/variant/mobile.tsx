import NextLink from "next/link";
import { useState } from "react";

import { Box, Link } from 'theme-ui';

import CopyrightText from "../../common/copyright";
import SocialLinks from "../../common/socials";
import HamburgerButton from "../hamburger";
import Navbar from "../navbar";
import NavbarItem from "../navbar/item";

import { menuVoicesMap } from "@/shared-data/navbar";

export default function HeaderMobile() {
  const mobile = "@media (max-width: 991px)";
  
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen(p => !p);

  return (
    <>
      {isOpen && 
        <style>{`body{overflow-y:hidden;}`}</style>
      }

      {/** menu mask */}
      <Box 
        onClick={toggle}
        sx={{
          display: "none",
          zIndex: 999,
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: !isOpen ? "rgb(0,0,0,0)" : "rgb(0,0,0,0.5)",
          pointerEvents: !isOpen ? "none" : "all",
          transition: "background-color .5s ease-in-out",
          [mobile]: { display: "block" }
        }}
      />

      <Box
        sx={{
          position: "relative",
          display: "none",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "15px 20px",
          [mobile]: { display: "flex" }
        }}
      >

        <NextLink href="/" sx={{ height: "30px" }}>
          <img 
            sx={{ height: "100%", width: "auto" }}
            src="/images/logo.svg" 
            alt="logo" 
            title="Andrea Losavio's website logo" 
          />
        </NextLink>

        <HamburgerButton
          isOpen={isOpen}
          toggle={toggle}
        />

        {/** menu items - initially hidden */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: 320,
            gap: "30px",
            top: 0,
            right: "-350px",
            position: "fixed",
            zIndex: 1000,
            backgroundColor: "blue",
            padding: "60px 30px 30px",
            boxShadow: "-2px 0px 10px rgb(0 0 0 / 25%)",
            height: "100%",
            transform: `translateX(${!isOpen ? 0 : "-350px"})`,
            transition: "transform 0.5s ease-in-out"
          }}
        >

          <Navbar
            extraSx={{
              flexDirection: "column",
              gap: "20px",
              "& a": {
                width: "50%",
                padding: "10px 0"
              }
            }}
          >
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
            sx={{ alignSelf: "start" }}
          >
            CONTATTAMI
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          <CopyrightText />

          <SocialLinks
            extraSx={{
              alignSelf: "flex-end"
            }}
          />

        </Box>

      </Box>
    </>
  )
}
