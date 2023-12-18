import Image from 'next/image'

import { BriefcaseIcon } from '@heroicons/react/24/outline'
import { Heading, Paragraph } from 'theme-ui'

import Section from '@/components/section'
import SizableBox from '@/components/section/sizable-box'
import SectionWrapper from '@/components/section/wrapper'

import Background from '@/components/background'
import HighlightText from '@/components/highlight-text'
import KeyPoint from '@/components/key-point'
import Link from '@/components/link'

export default function DesignSection() {
  return (
    <>
    
      <Section 
        id="design" 
        bg="white"
      >
        <SectionWrapper 
          direction={[,"column"]} 
          ssx={{ gap: "40px" }}
        >

          <SizableBox>
            <Image
              src="/images/projects/burger-shop/all-together.png"
              alt="Buger Shop Web Design by Andrea Losavio"
              priority
              width={1160}
              height={1172}
            />
          </SizableBox>

          <SizableBox>
            <Heading as="h2" variant="h2">
              Un design accattivante attira {" "}
              <HighlightText>più clienti</HighlightText>
            </Heading>

            <Paragraph color='black'>
              Lo sapevi che il <b>90% dei visitatori</b> esce da un sito perché 
              non è abbastanza esplicativo a primo impatto? Anche le performance 
              e la difficoltà nell’utilizzo incidono molto, non solo
              verso i possibili clienti, ma anche nei social e motori di ricerca.
            </Paragraph>

            <Paragraph color='black'>
              Se il tuo sito rispecchia una di queste caratteristiche, allora è 
              giunto il momento di <KeyPoint as="b" color="darkGreen">aggiornarti</KeyPoint>.
            </Paragraph>

            <Link 
              variant="primary" 
              href="/servizi" 
              ssx={{ alignSelf: "flex-start", mt: "25px" }}
            >
              SERVIZI

              <BriefcaseIcon
                width={24} 
                sx={{ color: "black", ml: 2 }} 
              />
            </Link>
          </SizableBox>

        </SectionWrapper>
      </Section>

      <Background 
        bgImg="light-short" 
        placement="top" 
      />

    </>
  )
}
