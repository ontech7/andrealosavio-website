
import Section from "@/components/section";
import SectionWrapper from "@/components/section/wrapper";

import ServiceList from "@/components/services/list";

export default function ServicesSection() {
  return (
    <Section 
      id="services" 
      bg="transparent" 
      ssx={{ mt: "-180px" }}
    >
      <SectionWrapper>

        <ServiceList />

      </SectionWrapper>
    </Section>
  )
}
