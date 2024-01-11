import Image from "@/components/ui/core/image"

import Section from '@/components/ui/common/section'
import SizableBox from '@/components/ui/common/section/sizable-box'
import SectionWrapper from '@/components/ui/common/section/wrapper'

import Text from '@/components/ui/core/text'

import Background from '@/components/background'
import HighlightText from '@/components/ui/common/highlight-text'

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
            <Text as="h2" color="white">
              Le mie <HighlightText>esperienze</HighlightText>.
            </Text>

            <Text>
              Programmo ormai da quando avevo <b>13 anni</b>.<br />
              Ho bazzicato in vari ambiti, tra software e web, facendo progetti su progetti, per me e miei amici.
            </Text>

            <Text>
              Ho iniziato a lavorare a fine <b>dicembre 2018</b> in un’azienda di consulenza informatica, 
              incominciando a mettere mano su <b>Cordova</b>, un framework per sviluppo applicativi cross-device.
            </Text>

            <Text>
              Successivamente, nel 2019, passai a sviluppare web con il 
              CMS <b>Adobe Experience Manager</b>.
            </Text>

            <Text>
              Queste esperienze mi hanno permesso di costruire una forte conoscenza del web, nelle sue varie sfaccettature, 
              dal <b>backend</b>, al <b>frontend</b>, dal <b>design</b> alla <b>user experience</b>, e così via.
            </Text>

            <Text>
              Così come anche la possibilità di lavorare 
              con <b>grosse aziende</b> e clienti, compresi <b>internazionali</b>.
            </Text>
          </SizableBox>

        </SectionWrapper>
      </Section>

      <Background 
        bgImg="blue-and-light" 
        placement="bottom" 
        ssx={{ mb: "-1px" }}
      />

    </>
  )
}
