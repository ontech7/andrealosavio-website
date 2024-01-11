import { BriefcaseIcon } from "@heroicons/react/24/outline";

import Link from "@/components/ui/core/link";
import Text from "@/components/ui/core/text";

import Section from "@/components/ui/section";
import SectionWrapper from "@/components/ui/section/wrapper";

export default function InterestedServicesSection() {
  return (
    <Section 
      id="interested-services" 
      bg="transparent" 
      high
    >
      <SectionWrapper 
        direction={["column", "column"]} 
        ssx={{ textAlign: "center", gap: "25px" }}
      >

        <Text as="h2">
          Vuoi approfondire i servizi che offro?
        </Text>

        <Text color="black">
          Dai un’occhiata e ritorna in questa sezione quando ti senti pronto.
        </Text>

        <Link
          variant="primary"
          href="/contattami"
          ssx={{ mt: "20px", alignSelf: "center" }}
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
