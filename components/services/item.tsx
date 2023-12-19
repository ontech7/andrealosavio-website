import Image from 'next/image'
import Link from 'next/link'

import { Heading, Paragraph } from 'theme-ui'

import type { Service } from '@/shared-data/constants/services'

export default function ServiceItem({
  serviceName,
  alt,
  title,
  description
}: Service) {
  return (
    <Link
      href={`/contattami?s=${serviceName}`}
      sx={{
        textDecoration: "none",
        maxWidth: "320px",
        height: "324px",
        backgroundColor: "lightBlue",
        padding: "30px 20px",
        borderRadius: "10px",
        boxShadow: "0px 2px 10px #3334",
        margin: "10px",
        textAlign: "center"
      }}
    >

      <Image 
        src={require(`./images/${serviceName}.svg`)}
        alt={alt}
        sx={{ height: "60px", mb: "20px" }}
      />

      <Heading as="h3" variant="h3" sx={{ mb: "25px" }}>
        {title}
      </Heading>

      <Paragraph color="black">
        {description}
      </Paragraph>

    </Link>
  )
}
