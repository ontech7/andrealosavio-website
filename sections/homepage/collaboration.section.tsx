import Image from "next/image"
import NextLink from "next/link"

import { breakpoints } from "@/shared-data/theme"
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline'
import { Box, Heading, Link, Paragraph } from 'theme-ui'

import Section from '@/components/section'
import HalfBox from '@/components/section/half-box'
import SectionWrapper from '@/components/section/wrapper'

import Background from "@/components/background"
import KeyPoint from "@/components/key-point"

export default function CollaborationSection() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden"
      }}
    >

      <Background
        bgImg="collaborazioni"
        placement="bottom"
        ssx={{ zIndex: 2 }}
      />

      <Image
        src="/images/chisono/lavoro-blurred.webp"
        alt="La mia postazione di lavoro"
        fill
        sx={{ objectFit: "cover" }}
      />
    
      <Section 
        id="design" 
        bg="transparentGreen"
        ssx={{ marginTop: "1px", textAlign: "center" }}
      >
        <SectionWrapper 
          ssx={{ justifyContent: "center", py: "40px" }}
        >

          <HalfBox ssx={{ [breakpoints.mobile]: { width: "90%" } }}>
            <Heading as="h2" variant="h2" color="white">
              Sei una Start Up in cerca di {" "}
              <KeyPoint>collaborazioni</KeyPoint>?
            </Heading>

            <Paragraph>
              Sono sempre aperto ad eventuali lavori e opportunità di partnerships.
            </Paragraph>

            <Link 
              as={NextLink} 
              variant="secondary" 
              href="/contattami?s=collab" 
              sx={{ alignSelf: "center" }}
            >
              DISCUTIAMONE

              <ChatBubbleBottomCenterTextIcon
                width={24} 
                sx={{ color: "black", ml: 2 }} 
              />
            </Link>
          </HalfBox>

        </SectionWrapper>
      </Section>

    </Box>
  )
}
