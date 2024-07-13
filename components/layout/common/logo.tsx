import NextLink from "next/link";

import { breakpoints } from "@/shared-data/theme";

export default function LayoutLogo() {
  return (
    <NextLink
      href="/"
      sx={{ height: 35, [breakpoints.tablet]: { height: 30 } }}
    >
      <img
        sx={{ height: "100%", width: "auto" }}
        src="/images/logo.svg"
        alt="logo"
        title="Andrea Losavio's website logo"
      />
    </NextLink>
  );
}
