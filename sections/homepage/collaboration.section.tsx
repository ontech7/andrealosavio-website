import Image from "next/image"

import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline'
import { Box, Heading, Paragraph } from 'theme-ui'

import Section from '@/components/section'
import SizableBox from '@/components/section/sizable-box'
import SectionWrapper from '@/components/section/wrapper'

import Background from "@/components/background"
import KeyPoint from "@/components/key-point"
import Link from "@/components/link"

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
        priority
        sx={{ objectFit: "cover" }}
      />
    
      <Section 
        id="collaboration" 
        bg="transparentGreen"
        ssx={{ mt: "1px", textAlign: "center" }}
      >
        <SectionWrapper 
          ssx={{ justifyContent: "center", py: "40px" }}
        >

          <SizableBox width={[,,"90%"]}>
            <Heading as="h2" variant="h2" color="white">
              Sei una Start Up in cerca di {" "}
              <KeyPoint>collaborazioni</KeyPoint>?
            </Heading>

            <Paragraph>
              Sono sempre aperto ad eventuali lavori e opportunità di partnerships.
            </Paragraph>

            <Link
              variant="secondary" 
              href="/contattami?s=collab" 
              ssx={{ alignSelf: "center" }}
            >
              DISCUTIAMONE

              <ChatBubbleBottomCenterTextIcon
                width={24} 
                sx={{ color: "black", ml: 2 }} 
              />
            </Link>
          </SizableBox>

        </SectionWrapper>
      </Section>

    </Box>
  )
}
