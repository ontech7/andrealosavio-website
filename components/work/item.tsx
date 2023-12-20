import { Work } from '@/shared-data/constants/works'
import { breakpoints } from '@/shared-data/theme'
import Image from 'next/image'
import Link from 'next/link'

export default function WorkItem({
  href,
  workName,
  alt
}: Work) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Image 
        src={require(`./images/${workName}.png`)}
        alt={alt}
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
