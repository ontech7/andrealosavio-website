import NextLink from "next/link";

export default function LayoutLogo() {
  const mobile = "@media (max-width: 991px)";

  return (
    <NextLink href="/" sx={{ height: 35, [mobile]: { height: 30 } }}>
      <img 
        sx={{ height: "100%", width: "auto" }}
        src="/images/logo.svg" 
        alt="logo" 
        title="Andrea Losavio's website logo" 
      />
    </NextLink>
  )
}
