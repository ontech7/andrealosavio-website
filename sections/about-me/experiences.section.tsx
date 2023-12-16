import Image from 'next/image'

import { Heading, Paragraph } from 'theme-ui'

import Section from '@/components/section'
import SizableBox from '@/components/section/sizable-box'
import SectionWrapper from '@/components/section/wrapper'

import Background from '@/components/background'
import HighlightText from '@/components/highlight-text'

export default function ExperiencesSection() {
  return (
    <>
    
      <Section 
        id="experiences" 
        bg="blue"
      >
        <SectionWrapper 
          direction={[,"column"]} 
          ssx={{ gap: "40px" }}
        >

          <SizableBox>
            <Image
              src="/images/chisono/lavoro.webp"
              alt="Il mio lavoro"
              priority
              width={1177}
              height={892}
            />
          </SizableBox>

          <SizableBox>
            <Heading as="h2" variant="h2" color="white">
              Le mie <HighlightText ssx={{ color: "black" }}>esperienze</HighlightText>.
            </Heading>

            <Paragraph>
              Programmo ormai da quando avevo <b>13 anni</b>.<br />
              Ho bazzicato in vari ambiti, tra software e web, facendo progetti su progetti, per me e miei amici.
            </Paragraph>

            <Paragraph>
              Ho iniziato a lavorare a fine <b>dicembre 2018</b> in un’azienda di consulenza informatica, 
              incominciando a mettere mano su <b>Cordova</b>, un framework per sviluppo applicativi cross-device.
            </Paragraph>

            <Paragraph>
              Successivamente, nel 2019, passai a sviluppare web con il 
              CMS <b>Adobe Experience Manager</b>.
            </Paragraph>

            <Paragraph>
              Queste esperienze mi hanno permesso di costruire una forte conoscenza del web, nelle sue varie sfaccettature, 
              dal <b>backend</b>, al <b>frontend</b>, dal <b>design</b> alla <b>user experience</b>, e così via.
            </Paragraph>

            <Paragraph>
              Così come anche la possibilità di lavorare 
              con <b>grosse aziende</b> e clienti, compresi <b>internazionali</b>.
            </Paragraph>
          </SizableBox>

        </SectionWrapper>
      </Section>

      <Background 
        bgImg="blue-and-light" 
        placement="bottom" 
      />

    </>
  )
}
