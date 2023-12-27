import Image from "@/components/core/image"

import { CursorArrowRaysIcon } from '@heroicons/react/24/outline'

import Link from '@/components/core/link'
import Text from '@/components/core/text'

import Section from '@/components/section'
import SectionWrapper from '@/components/section/wrapper'

import { breakpoints } from '@/shared-data/theme'

export default function MyCareerSection() {
  return (
    <Section 
      id="my-career"
    >
      <SectionWrapper 
        direction={["column", "column"]} 
        ssx={{ textAlign: "center", gap: "25px", mb: "20px" }}
      >

        <Text as="h2">
          Esplora il mio percorso professionale.
        </Text>

        <Text color="black" ssx={{ maxWidth: "800px", mx: "auto" }}>
          Scopri la mia storia professionale in un click.<br />
          Dal mio <b>background educativo</b> alle <b>esperienze lavorative</b> più rilevanti, 
          troverai tutto ciò che serve per comprendere il mio percorso e le mie competenze.
        </Text>
        
        <div
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "600px",
            height: "auto",
            mt: "20px",
            mx: "auto"
          }}
        >
          <Image
            src="/images/chisono/curriculum.png"
            alt="Il mio curriculum"
            priority
            width={519}
            height={168}
            sx={{ 
              filter: "blur(6px)",
              [breakpoints.mobile]: { filter: "blur(4px)" }
            }}
          />

          <Link
            variant="primary"
            href="/files/AndreaLosavio_CV.pdf"
            target="_blank"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              whiteSpace: "nowrap",
              zIndex: 2
            }}
          >
            Scarica il CV

            <CursorArrowRaysIcon
              width={24} 
              sx={{ color: "black", ml: 2 }} 
            />
          </Link>
            
        </div>

      </SectionWrapper>
    </Section>
  )
}
