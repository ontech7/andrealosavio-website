import { breakpoints } from "@/shared-data/theme";

import Section from "@/components/section";
import SectionWrapper from "@/components/section/wrapper";

import ServiceList from "@/components/services/list";

export default function ServicesSection() {
  return (
    <Section 
      id="services" 
      bg="transparent" 
      ssx={{ 
        height: "80%", 
        minHeight: 800, 
        maxHeight: 1200,
        mt: "-180px",
        [breakpoints.tablet]: { minHeight: 665 },
        [breakpoints.tablet]: { pt: "100px" }
      }}
    >
      <SectionWrapper>

        <ServiceList />

      </SectionWrapper>
    </Section>
  )
}
