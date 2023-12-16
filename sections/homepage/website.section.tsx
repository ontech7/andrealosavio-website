import Image from 'next/image'

import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import { Heading, Paragraph } from 'theme-ui'

import Section from '@/components/section'
import SizableBox from '@/components/section/sizable-box'
import SectionWrapper from '@/components/section/wrapper'

import HighlightText from '@/components/highlight-text'
import KeyPoint from '@/components/key-point'
import Link from '@/components/link'

export default function WebsiteSection() {
  return (
    <>
    
      <Section 
        id="website" 
        bg="lightBlue"
      >
        <SectionWrapper 
          direction={[,"column-reverse"]} 
          ssx={{ gap: "40px" }}
        >

          <SizableBox>
            <Heading as="h2" variant="h2">
              Perché è importante avere un {" "}
              <HighlightText color="yellow">Sito Web</HighlightText>
            </Heading>

            <Paragraph color='black'>
              Quando un potenziale cliente cercherà il tuo prodotto o 
              servizio su Google, se non trova il tuo sito, <b>troverà quello del tuo concorrente</b>, 
              e il tuo business potrebbe risentirne.
            </Paragraph>

            <Paragraph color='black'>
              Un sito web che si mostra professionale, aumenta la credibilità della 
              tua attività, fornendoti maggiore visibilità e aiutandoti a costruire 
              la tua <b>Brand Identity</b>.
            </Paragraph>

            <Paragraph color='black'>
              Bisogna prestare attenzione ai <KeyPoint as="b" color="darkGreen">minimi dettagli</KeyPoint>, 
              ed è quello che farò con te.
            </Paragraph>

            <Link
              variant="secondary" 
              href="/contattami" 
              ssx={{ alignSelf: "flex-start", mt: "25px" }}
            >
              INIZIAMO

              <ArrowRightCircleIcon
                width={24} 
                sx={{ color: "black", ml: 2 }} 
              />
            </Link>
          </SizableBox>

          <SizableBox>
            <Image
              src="/images/projects/caffe-barocco/all-together.png"
              alt="Caffè Barocco Web Design by Andrea Losavio"
              priority
              width={1158}
              height={668}
            />
          </SizableBox>

        </SectionWrapper>
      </Section>

    </>
  )
}
