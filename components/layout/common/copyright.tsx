import Link from "@/components/ui/core/link";
import Text from "@/components/ui/core/text";

export default function CopyrightText() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      sx={{
        "& p": { fontSize: 16 },
        "& a": { color: "green", fontWeight: "regular" },
      }}
    >
      <Text>© Copyright {currentYear} | Andrea Losavio</Text>

      <Text>
        <Link target="_blank" href="/privacy-policy">
          Privacy Policy
        </Link>

        {" - "}

        <Link target="_blank" href="/cookie-policy">
          Cookie Policy
        </Link>
      </Text>

      <Text>P.I. 12705460967</Text>
    </div>
  );
}
