import Link from 'next/link'

import { Box, ThemeUIStyleObject } from 'theme-ui'

import { socialLinks } from '@/shared-data/navbar'

export default function SocialLinks({ extraSx }: {
  extraSx?: ThemeUIStyleObject
}) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "5px",
        ...extraSx
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

