import Image from 'next/image'

import { BriefcaseIcon, HomeIcon } from '@heroicons/react/24/outline'
import { Box, Heading, Paragraph } from 'theme-ui'

import Section from '@/components/section'
import SizableBox from '@/components/section/sizable-box'
import SectionWrapper from '@/components/section/wrapper'

import Background from '@/components/background'
import Link from '@/components/link'

import notFoundImg from "@/public/images/404.svg"

export default function NotFoundSection() {
  return (
    <>

      <Background 
        bgImg="blue" 
        placement="bottom" 
      />
    
      <Section 
        id="404" 
        bg="white"
      >
        <SectionWrapper 
          direction={["column", "column"]}
          ssx={{ gap: "40px", py: "20px", alignItems: "center", justifyContent: "center" }}
        >

          <SizableBox>
            <Image
              src={notFoundImg}
              alt="Errore 404"
              priority
            />
          </SizableBox>

          <Heading as="h1" variant="h1" color="black">
            Qualcosa è andato storto.
          </Heading>

          <Paragraph color="black" sx={{ textAlign: "center", mt: "-20px" }}>
            La pagina su cui volevi atterrare, non esiste.<br />
            Se hai bisogno di un servizio o vuoi tornare alla Homepage, clicca qui sotto:
          </Paragraph>

          <Box>

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

          </Box>

        </SectionWrapper>
      </Section>

      <Background 
        bgImg="blue" 
        placement="top" 
      />

    </>
  )
}
