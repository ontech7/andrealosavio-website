import Section from "@/components/ui/common/section";
import SectionWrapper from "@/components/ui/common/section/wrapper";

import ServiceList from "@/components/services/list";

export default function ServicesSection() {
  return (
    <Section id="services" bg="transparent" ssx={{ mt: "-180px", mb: "-30px" }}>
      <SectionWrapper>
        <ServiceList />
      </SectionWrapper>
    </Section>
  );
}
