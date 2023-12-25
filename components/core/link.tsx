import NextLink, { type LinkProps } from "next/link";
import { useRouter } from "next/router";

import type { AnchorHTMLAttributes, SyntheticEvent } from "react";
import { useCallback } from "react";

import type { ThemeUIStyleObject } from "@theme-ui/core";

import { scrollToId } from "@/shared-data/utils/link";

interface CustomLinkProps { 
  variant?: string
  color?: string
  ssx?: ThemeUIStyleObject 
}

type LinkAttributes = 
  LinkProps & 
  AnchorHTMLAttributes<HTMLAnchorElement> &
  CustomLinkProps

export default function Link(props: LinkAttributes) {
  const router = useRouter();

  const goToElement = useCallback((e: SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const [path, anchor] = props.href?.split("#")
    if (path) { (props.target ?? "_self") ? router.push(path) : window.open(props.href, "_blank") }
    if (anchor) { setTimeout(() => scrollToId(anchor), 50) } //debounce
  }, [props.href])

  return (
    <NextLink 
      {...props}
      onClick={goToElement}
      sx={{
        fontFamily: "body",
        ...props.variant && { variant: `buttons.${props.variant}` },
        ...props.ssx,
      }}
    >

      {props.children}
    
    </NextLink>
  )
}
