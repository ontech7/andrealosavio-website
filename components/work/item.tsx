import Image from 'next/image'
import NextLink from 'next/link'

import type { Work } from '@/shared-data/constants/works'
import { breakpoints } from '@/shared-data/theme'

export default function WorkItem(props: Work) {
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
          "&:hover": { opacity: 0.6 } 
        }}
      />
    </NextLink>
  )
}
