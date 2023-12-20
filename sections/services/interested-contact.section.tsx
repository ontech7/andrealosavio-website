import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { Heading, Paragraph } from "theme-ui";

import Section from "@/components/section";
import SectionWrapper from "@/components/section/wrapper";

import Link from "@/components/link";

export default function InterestedContactSection() {
  return (
    <Section 
      id="interested" 
      bg="transparent" 
      high
    >
      <SectionWrapper 
        direction={["column", "column"]} 
        ssx={{ alignItems: "center", gap: "25px" }}
      >

        <Heading as="h2" variant="h2">
          Sei interessato ad uno di questi servizi?
        </Heading>

        <Paragraph color="black">
          Contattami ed effettuerò su misura per te un preventivo completamente gratuito.
        </Paragraph>

        <Link
          variant="secondary"
          href="/contattami"
          ssx={{ mt: "20px" }}
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
