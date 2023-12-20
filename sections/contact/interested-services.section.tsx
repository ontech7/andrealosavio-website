import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { Heading, Paragraph } from "theme-ui";

import Section from "@/components/section";
import SectionWrapper from "@/components/section/wrapper";

import Link from "@/components/link";

export default function InterestedServicesSection() {
  return (
    <Section 
      id="interested-services" 
      bg="transparent" 
      high
    >
      <SectionWrapper 
        direction={["column", "column"]} 
        ssx={{ alignItems: "center", gap: "25px" }}
      >

        <Heading as="h2" variant="h2">
          Vuoi approfondire i servizi che offro?
        </Heading>

        <Paragraph color="black">
          Dai un’occhiata e ritorna in questa sezione quando ti senti pronto.
        </Paragraph>

        <Link
          variant="primary"
          href="/contattami"
          ssx={{ mt: "20px" }}
        >
          SERVIZI
          
          <BriefcaseIcon
            width={24} 
            sx={{ color: "black", ml: 2 }} 
          />
        </Link>

      </SectionWrapper>
    </Section>
  )
}
