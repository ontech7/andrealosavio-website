import Image from "@/components/ui/core/image"

import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline'

import Section from '@/components/ui/common/section'
import SizableBox from '@/components/ui/common/section/sizable-box'
import SectionWrapper from '@/components/ui/common/section/wrapper'

import Link from "@/components/ui/core/link"
import Text from "@/components/ui/core/text"

import Background from "@/components/background"
import KeyPoint from "@/components/ui/common/key-point"

export default function CollaborationSection() {
  return (
    <div
      sx={{
        zIndex: 0,
        position: "relative",
        overflow: "hidden"
      }}
    >

      <Background
        bgImg="collaborazioni"
        placement="bottom"
        ssx={{ mb: "-1px" }}
      />

      <Image
        src="/images/chisono/lavoro-blurred.webp"
        alt="La mia postazione di lavoro"
        fill
        priority
        sx={{ objectFit: "cover", zIndex: -1 }}
      />
    
      <Section 
        id="collaboration" 
        bg="transparentGreen"
        ssx={{ mt: "1px", textAlign: "center" }}
      >
        <SectionWrapper 
          ssx={{ justifyContent: "center", py: "40px" }}
        >

          <SizableBox width={[,,"90%"]} ssx={{ textAlign: "center" }}>
            <Text as="h2" color="white">
              Sei una Start Up in cerca di {" "}
              <KeyPoint>collaborazioni</KeyPoint>?
            </Text>

            <Text>
              Sono sempre aperto ad eventuali lavori e opportunità di partnerships.
            </Text>

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

    </div>
  )
}
