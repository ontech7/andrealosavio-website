import { useRouter } from "next/router";
import type { ReactNode, SyntheticEvent } from "react";
import { useCallback } from "react";

import { Link as ThemeUILink, type ThemeUIStyleObject } from "theme-ui";

import { scrollToId } from "@/shared-data/utils/link";

export default function Link({
  children,
  variant,
  href,
  newTab,
  rel,
  ssx
}: {
  children?: ReactNode
  variant?: string
  href: string
  newTab?: boolean
  rel?: string
  ssx?: ThemeUIStyleObject
}) {
  const router = useRouter();

  const goToElement = useCallback((e: SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const [path, anchor] = href?.split("#")
    if (path) { !newTab ? router.push(path) : window.open(href, "_blank") }
    if (anchor) { setTimeout(() => scrollToId(anchor), 50) } //debounce
  }, [href])

  return (
    <ThemeUILink 
      variant={variant}
      href={href}
      onClick={goToElement}
      rel={rel}
      sx={ssx}
    >

      {children}
    
    </ThemeUILink>
  )
}
