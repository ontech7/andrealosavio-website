import NextLink from "next/link";

import Image from "@/components/ui/core/image";

import type { Work } from "@/shared-data/constants/works";
import { breakpoints } from "@/shared-data/theme";

interface WorkItemProps extends Work {}

export default function WorkItem(props: WorkItemProps) {
  return (
    <NextLink href={props.href} target="_blank" rel="noopener noreferrer">
      <Image
        src={require(`./images/${props.workName}.png`)}
        alt={props.alt ?? ""}
        sx={{
          height: "50px",
          width: "auto",
          opacity: 0.3,
          transition: "opacity 0.5s ease-in-out",
          [breakpoints.tablet]: { height: "30px" },
          "&:hover": { opacity: 0.6 },
        }}
      />
    </NextLink>
  );
}
