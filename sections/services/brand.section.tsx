import { breakpoints } from "@/shared-data/theme";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { Heading, Paragraph } from "theme-ui";

import Section from "@/components/section";
import SectionWrapper from "@/components/section/wrapper";

import HighlightText from "@/components/highlight-text";
import Link from "@/components/link";

export default function BrandSection() {
  return (
    <Section 
      id="brand" 
      bg="blue" 
      ssx={{ 
        height: "80%", 
        minHeight: 800, 
        maxHeight: 1200,
        pt: "135px",
        [breakpoints.tablet]: { minHeight: 665 },
        [breakpoints.tablet]: { pt: "100px" }
      }}
    >
      <SectionWrapper 
        direction={["column", "column"]} 
        ssx={{ textAlign: "center", gap: "25px" }}
      >

        <Heading as="h1" variant="h1">
          Perfeziona il tuo <HighlightText bg="custom">brand</HighlightText> per 
          entusiasmare la gente.
        </Heading>

        <Paragraph>
          Servizi di consulenza, creazione siti web, insegnamento, e tanto altro.<br />
          Di cosa hai bisogno?
        </Paragraph>

        <Link 
          variant="primary" 
          href="#services" 
          ssx={{ alignSelf: "center", mt: "20px" }}
        >
          PASSA ALL'AZIONE

          <ArrowDownCircleIcon 
            width={24} 
            sx={{ color: "black", ml: 2 }} 
          />
        </Link>

      </SectionWrapper>
    </Section>
  )
}
