import { useState } from "react";

import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

import CopyrightText from "../../common/copyright";
import LayoutLogo from "../../common/logo";
import Navbar from "../../common/navbar";
import NavbarItem from "../../common/navbar/item";
import SocialLinks from "../../common/socials";
import LayoutWrapper from "../../common/wrapper";
import HamburgerButton from "../hamburger";

import Link from "@/components/ui/core/link";

import { menuVoicesMap } from "@/shared-data/constants/navbar/menu";
import { breakpoints } from "@/shared-data/theme";

export default function HeaderMobile() {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen(p => !p);

  return (
    <>
      {isOpen && 
        <style>{`body{overflow-y:hidden;}`}</style>
      }

      {/** menu mask */}
      <div 
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
          [breakpoints.tablet]: { display: "block" }
        }}
      />

      <LayoutWrapper
        ssx={{
          display: "none",
          [breakpoints.tablet]: { display: "flex" }
        }}
      >

        <LayoutLogo />

        <HamburgerButton
          isOpen={isOpen}
          toggle={toggle}
        />

        {/** menu items - initially hidden */}
        <div
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
            ssx={{
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
                noHover
              />

            )}
          </Navbar>

          <Link
            variant="secondary"
            href="/contattami"
            ssx={{ alignSelf: "start" }}
          >
            CONTATTAMI

            <ArrowRightCircleIcon 
              width={24} 
              sx={{ color: "black", ml: 2 }} 
            />
          </Link>

          <div sx={{ flexGrow: 1 }} />

          <CopyrightText />

          <SocialLinks ssx={{ alignSelf: "flex-end" }} />

        </div>

      </LayoutWrapper>
    </>
  )
}
