import Image from 'next/image'
import NextLink from 'next/link'

import Text from '../core/text'

import type { Service } from '@/shared-data/constants/services'

export default function ServiceItem(props: Service) {
  return (
    <NextLink
      href={`/contattami?s=${props.serviceName}`}
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
        src={require(`./images/${props.serviceName}.svg`)}
        alt={props.alt ?? ""}
        sx={{ height: "60px", mb: "20px" }}
      />

      <Text as="h3" ssx={{ mb: "25px" }}>
        {props.title}
      </Text>

      <Text color="black">
        {props.description}
      </Text>

    </NextLink>
  )
}
