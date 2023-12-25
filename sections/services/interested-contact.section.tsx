import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

import Link from "@/components/core/link";
import Text from "@/components/core/text";

import Section from "@/components/section";
import SectionWrapper from "@/components/section/wrapper";

export default function InterestedContactSection() {
  return (
    <Section 
      id="interested" 
      bg="transparent" 
      high
    >
      <SectionWrapper 
        direction={["column", "column"]} 
        ssx={{ textAlign: "center", gap: "25px" }}
      >

        <Text as="h2">
          Sei interessato ad uno di questi servizi?
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
