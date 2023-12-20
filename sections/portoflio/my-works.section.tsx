import { Heading } from 'theme-ui'

import Section from '@/components/section'
import SectionWrapper from '@/components/section/wrapper'

import HighlightText from '@/components/highlight-text'

export default function MyWorksSection() {
  return (
    <Section 
      id="my-works" 
      bg="blue" 
      high
    >
      <SectionWrapper 
        direction={["column", "column"]} 
        ssx={{ alignItems: "center", gap: "25px" }}
      >

        <Heading as="h1" variant="h1">
          Il mio <HighlightText>portfolio</HighlightText>.
        </Heading>

      </SectionWrapper>
    </Section>
  )
}
