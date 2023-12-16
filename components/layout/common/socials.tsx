import Link from 'next/link'

import { Box, type ThemeUIStyleObject } from 'theme-ui'

import { socialLinks } from '@/shared-data/constants/navbar/socials'

export default function SocialLinks({ ssx }: {
  ssx?: ThemeUIStyleObject
}) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "8px",
        ...ssx
      }}
    >

      {socialLinks.map(([href, imgSrc, alt]) =>
        <Link 
          key={alt}
          target="_blank" 
          href={href}
        >
          <img 
            sx={{ width: "24px", height: "24px" }}
            src={imgSrc} 
            alt={alt} 
          />
        </Link>
      )}

    </Box>
  )
}

