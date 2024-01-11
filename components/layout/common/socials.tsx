import NextLink from 'next/link'
import type { FC } from 'react'

import type { ThemeUIStyleObject } from '@theme-ui/core'

import { socialLinks } from '@/shared-data/constants/navbar/socials'

interface ISocialLinksProps {
  ssx?: ThemeUIStyleObject
}

const SocialLinks: FC<ISocialLinksProps> = ({ ssx }) => {
  return (
    <div
      sx={{
        display: "flex",
        gap: "8px",
        ...ssx
      }}
    >

      {socialLinks.map(([href, imgSrc, alt]) =>
        <NextLink 
          key={alt}
          target="_blank" 
          href={href}
        >
          <img 
            sx={{ width: "24px", height: "24px" }}
            src={imgSrc} 
            alt={alt} 
          />
        </NextLink>
      )}

    </div>
  )
}

export default SocialLinks;