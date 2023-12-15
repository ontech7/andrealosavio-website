import Image from 'next/image'
import NextLink from "next/link"

import { Heading, Link, Paragraph } from 'theme-ui'

import Section from '@/components/section'
import SectionWrapper from '@/components/section/wrapper'

import HighlightText from '@/components/highlight-text'

import Background from '@/components/background'
import KeyPoint from '@/components/key-point'
import HalfBox from '@/components/section/half-box'
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'

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

          <HalfBox>
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
              as={NextLink} 
              variant="secondary" 
              href="/contattami" 
              sx={{ alignSelf: "flex-start", mt: "25px" }}
            >
              INIZIAMO

              <ArrowRightCircleIcon
                width={24} 
                sx={{ color: "black", ml: 2 }} 
              />
            </Link>
          </HalfBox>

          <HalfBox>
            <Image
              src="/images/projects/caffe-barocco/all-together.png"
              alt="Caffè Barocco Web Design by Andrea Losavio"
              width={1158}
              height={668}
            />
          </HalfBox>

        </SectionWrapper>
      </Section>

      <Background 
        bgImg="light-short" 
        placement="bottom" 
      />

    </>
  )
}
