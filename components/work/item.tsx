import { Work } from '@/shared-data/constants/work'
import { breakpoints } from '@/shared-data/theme'
import Image from 'next/image'
import Link from 'next/link'

export default function WorkItem({
  href,
  src,
  alt,
  width,
  height
}: Work) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Image 
        src={src}
        alt={alt}
        width={width} height={height} 
        sx={{ 
          height: "50px", 
          width: "auto",
          opacity: 0.3,
          transition: "opacity 0.5s ease-in-out",
          [breakpoints.tablet]: { height: "30px" },
          "&:hover": { opacity: 0.6 } 
        }}
      />
    </Link>
  )
}
