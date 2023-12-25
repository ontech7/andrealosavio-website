import Section from '@/components/section'
import SectionWrapper from '@/components/section/wrapper'

import Text from '@/components/core/text'

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
          ssx={{ textAlign: "center", gap: "25px" }}
        >

          <Text as="h1">
            Fai la tua <KeyPoint>richiesta</KeyPoint>.
          </Text>

          <Text>
            Scegli il servizio che più fa al caso tuo, e riceverai presto un preventivo completamente gratuito.
          </Text>

        </SectionWrapper>
      </Section>

      <Background
        bgImg="triangle-blue"
        placement="bottom"
      />

    </>
  )
}
