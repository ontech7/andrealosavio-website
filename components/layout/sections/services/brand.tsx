import { breakpoints } from "@/shared-data/theme";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

import Link from "@/components/ui/core/link";
import Text from "@/components/ui/core/text";

import Section from "@/components/ui/common/section";
import SectionWrapper from "@/components/ui/common/section/wrapper";

import HighlightText from "@/components/ui/common/highlight-text";

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
        [breakpoints.tablet]: { pt: "100px" },
      }}
    >
      <SectionWrapper
        direction={["column", "column"]}
        ssx={{ textAlign: "center", gap: "25px" }}
      >
        <Text as="h1">
          Perfeziona il tuo <HighlightText bg="custom">brand</HighlightText> per
          entusiasmare la gente.
        </Text>

        <Text>
          Servizi di consulenza, creazione siti web, insegnamento, e tanto
          altro.
          <br />
          Di cosa hai bisogno?
        </Text>

        <Link
          variant="primary"
          href="#services"
          ssx={{ alignSelf: "center", mt: "20px" }}
        >
          PASSA ALL'AZIONE
          <ArrowDownCircleIcon width={24} sx={{ color: "black", ml: 2 }} />
        </Link>
      </SectionWrapper>
    </Section>
  );
}
