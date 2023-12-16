import Image from 'next/image'
import NextLink from "next/link"

import { Heading, Link, Paragraph } from 'theme-ui'

import Section from '@/components/section'
import SizableBox from '@/components/section/sizable-box'
import SectionWrapper from '@/components/section/wrapper'

import Background from '@/components/background'
import HighlightText from '@/components/highlight-text'
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'

export default function ProductionSection() {
  return (
    <>
    
      <Section 
        id="production" 
        bg="lightBlue"
      >
        <SectionWrapper 
          direction={[,"column-reverse"]} 
          ssx={{ gap: "40px" }}
        >

          <SizableBox>
            <Heading as="h2" variant="h2">
              Un design accattivante attira {" "}
              <HighlightText>più clienti</HighlightText>
            </Heading>

            <Paragraph color='black'>
              Creo <b>siti web</b> su misura per il <b>cliente</b> e il <b>tipo di attività</b> che conduce.<br />
              Scelgo <b>colori</b>, font di <b>carattere</b> ed <b>elementi</b> che più rispecchiano il business, in modo da <b>enfatizzarlo</b>, e <b>attirare l’attenzione</b> di un visitatore
              <b>transformandolo</b> in cliente.
            </Paragraph>

            <Paragraph color='black'>
              Dietro un sito web, non c’è solo codice e design, ma anche un
              <b>insieme di studi</b>. Accennandone 
              qualcuno: <b>analisi di mercato</b>, <b>analisi del target cliente</b>, <b>ottimizzazione sul motore di ricerca</b>, e così via.
            </Paragraph>

            <Paragraph color='black'>
              Quando una persona decide voler commissionare un sito web, non sta pagando il sito web, ma 
              sta <b>investendo</b> verso un <b>professionista</b> del settore, che sarà in grado di portarti
              <b>nuovi clienti</b> e di costruire, crescere e rafforzare il tuo <b>brand</b>.
            </Paragraph>

            <Link 
              as={NextLink} 
              variant="primary" 
              href="/servizi" 
              sx={{ alignSelf: "flex-start", mt: "25px" }}
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
              src="/images/chisono/wireframe.webp"
              alt="Un esempio di wireframing"
              priority
              width={1178}
              height={906}
            />
          </SizableBox>

        </SectionWrapper>
      </Section>

      <Background 
        bgImg="light-short" 
        placement="bottom" 
      />

    </>
  )
}
