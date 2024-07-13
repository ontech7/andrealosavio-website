import NextLink from "next/link";

import type { ThemeUIStyleObject } from "@theme-ui/core";

import { socialLinks } from "@/shared-data/constants/navbar/socials";

interface SocialLinksProps {
  ssx?: ThemeUIStyleObject;
}

export default function SocialLinks({ ssx }: SocialLinksProps) {
  return (
    <div
      sx={{
        display: "flex",
        gap: "8px",
        ...ssx,
      }}
    >
      {socialLinks.map(([href, imgSrc, alt]) => (
        <NextLink key={alt} target="_blank" href={href}>
          <img sx={{ width: "24px", height: "24px" }} src={imgSrc} alt={alt} />
        </NextLink>
      ))}
    </div>
  );
}
