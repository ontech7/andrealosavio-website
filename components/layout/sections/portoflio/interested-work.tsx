import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

import Link from "@/components/ui/core/link";
import Text from "@/components/ui/core/text";

import Section from "@/components/ui/section";
import SectionWrapper from "@/components/ui/section/wrapper";

export default function InterestedWorkSection() {
  return (
    <Section 
      id="interested-work" 
      bg="lightBlue" 
      high
      ssx={{ mt: "-40px" }}
    >
      <SectionWrapper 
        direction={["column", "column"]} 
        ssx={{ textAlign: "center", gap: "25px" }}
      >

        <Text as="h2">
          Vuoi anche tu un sito web o un altro servizio?
        </Text>

        <Text color="black">
          Contattami ed effettuerò su misura per te un preventivo completamente gratuito.
        </Text>

        <Link
          variant="secondary"
          href="/contattami"
          ssx={{ mt: "20px", alignSelf: "center" }}
        >
          CONTATTAMI
          
          <ArrowRightCircleIcon
            width={24}
            sx={{ color: "black", ml: 2 }} 
          />
        </Link>

      </SectionWrapper>
    </Section>
  )
}
