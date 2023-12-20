import { Heading, Paragraph } from 'theme-ui'

import Section from '@/components/section'
import SectionWrapper from '@/components/section/wrapper'

import Background from '@/components/background'
import KeyPoint from '@/components/key-point'

export default function RequestSection() {
  return (
    <>

      <Section 
        id="request" 
        bg="blue" 
        ssx={{ pb: "100px", pt: "135px" }}
      >
        <SectionWrapper 
          direction={["column", "column"]} 
          ssx={{ alignItems: "center", gap: "25px" }}
        >

          <Heading as="h1" variant="h1">
            Fai la tua <KeyPoint>richiesta</KeyPoint>.
          </Heading>

          <Paragraph>
            Scegli il servizio che più fa al caso tuo, e riceverai presto un preventivo completamente gratuito.
          </Paragraph>

        </SectionWrapper>
      </Section>

      <Background
        bgImg="triangle-blue"
        placement="bottom"
      />

    </>
  )
}
