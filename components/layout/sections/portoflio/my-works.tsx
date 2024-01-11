import Section from '@/components/ui/section'
import SectionWrapper from '@/components/ui/section/wrapper'

import Text from '@/components/ui/core/text'

import HighlightText from '@/components/ui/common/highlight-text'

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
