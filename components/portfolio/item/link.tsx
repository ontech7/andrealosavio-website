import { LinkIcon, MagnifyingGlassPlusIcon } from "@heroicons/react/24/outline";

import Link from "@/components/ui/core/link";

interface PortfolioLinkProps {
  type: "link" | "zoom";
  href: string;
}

export default function PortfolioLink({ type, href }: PortfolioLinkProps) {
  const Icon = type == "link" ? LinkIcon : MagnifyingGlassPlusIcon;

  return (
    <Link
      href={href}
      target="_blank"
      sx={{
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bg: "yellow",
        borderRadius: "100%",
        mx: "8px",
      }}
    >
      <Icon width={24} sx={{ color: "black" }} />
    </Link>
  );
}
