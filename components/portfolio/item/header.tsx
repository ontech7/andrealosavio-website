import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

import Button from "@/components/ui/core/button";
import Image from "@/components/ui/core/image";
import Text from "@/components/ui/core/text";

interface PortfolioHeaderProps {
  title: string;
  logo?: string;
  active: boolean;
  toggle: () => void;
}

export default function PortfolioHeader({
  title,
  logo,
  active,
  toggle,
}: PortfolioHeaderProps) {
  const ChevronIcon = !active ? ChevronUpIcon : ChevronDownIcon;

  return (
    <div
      sx={{
        mt: "auto",
        display: "flex",
        justifyContent: "space-between",
        p: "10px 15px",
        bg: "white",
        boxShadow: "0 -4px 16px #3332",
      }}
    >
      <div sx={{ display: "flex", gap: "8px" }}>
        {logo && (
          <Image
            src={logo}
            alt={title}
            width={32}
            height={32}
            sx={{ width: "auto !important", height: "24px" }}
          />
        )}
        <Text color="darkBlue" ssx={{ fontWeight: "semiBold" }}>
          {title}
        </Text>
      </div>

      <Button
        onClick={toggle}
        sx={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          zIndex: 0,
          textTransform: "uppercase",
          bg: "transparent",
          m: 0,
          mb: "2px",
          p: 0,
          px: "5px",
          fontWeight: "medium",
          color: !active ? "darkBlue" : "white",
          transition: "color 0.3s ease",
          "& svg": {
            color: !active ? "black" : "white",
            transition: "color 0.3s ease",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            zIndex: -1,
            bottom: 0,
            left: 0,
            width: "100%",
            height: !active ? "3px" : "30px",
            mb: "-2px",
            backgroundColor: "darkGreen",
            transition: "height 0.3s ease",
          },
          "&:hover": {
            color: "white",
            "& svg": { color: "white" },
            "&::after": { height: "30px" },
          },
        }}
      >
        {!active ? "Leggi di più" : "Leggi di meno"}
        <ChevronIcon width={16} sx={{ ml: 1 }} />
      </Button>
    </div>
  );
}
