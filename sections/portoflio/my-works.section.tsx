import Section from '@/components/section'
import SectionWrapper from '@/components/section/wrapper'

import Text from '@/components/core/text'

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
        ssx={{ textAlign: "center", gap: "25px" }}
      >

        <Text as="h1">
          Il mio <HighlightText>portfolio</HighlightText>.
        </Text>

      </SectionWrapper>
    </Section>
  )
}
