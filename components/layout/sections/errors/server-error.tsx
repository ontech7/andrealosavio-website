import Image from "@/components/ui/core/image"

import { BriefcaseIcon, HomeIcon } from '@heroicons/react/24/outline'

import Section from '@/components/ui/section'
import SizableBox from '@/components/ui/section/sizable-box'
import SectionWrapper from '@/components/ui/section/wrapper'

import Link from '@/components/ui/core/link'
import Text from '@/components/ui/core/text'

import Background from '@/components/background'

import serverErrorImg from "@/public/images/500.svg"

export default function ServerErrorSection() {
  return (
    <>

      <Background 
        bgImg="blue" 
        placement="bottom" 
      />
    
      <Section 
        id="500" 
        bg="white"
      >
        <SectionWrapper 
          direction={["column", "column"]}
          ssx={{ gap: "40px", py: "20px", textAlign: "center" }}
        >

          <SizableBox ssx={{ mx: "auto" }}>
            <Image
              src={serverErrorImg}
              alt="Errore 404"
              priority
            />
          </SizableBox>

          <Text as="h1" color="black">
            Qualcosa è andato storto.
          </Text>

          <Text color="black" ssx={{ textAlign: "center", mt: "-20px" }}>
            C’è stato un errore nel server.<br />
            Se hai bisogno di un servizio o vuoi tornare alla Homepage, clicca qui sotto:
          </Text>

          <div>

            <Link 
              variant="primary" 
              href="/servizi" 
              ssx={{ mr: "18px" }}
            >
              SERVIZI

              <BriefcaseIcon
                width={24} 
                sx={{ color: "black", ml: 2 }} 
              />
            </Link>

            <Link 
              variant="secondary" 
              href="/servizi" 
              ssx={{ ml: "18px" }}
            >
              HOMEPAGE

              <HomeIcon
                width={24} 
                sx={{ color: "black", ml: 2 }} 
              />
            </Link>

          </div>

        </SectionWrapper>
      </Section>

      <Background 
        bgImg="blue" 
        placement="top" 
        ssx={{ mb: "-1px" }}
      />

    </>
  )
}
