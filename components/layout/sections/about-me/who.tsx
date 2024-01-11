
import { breakpoints } from '@/shared-data/theme';

import Section from '@/components/ui/common/section';
import SectionWrapper from '@/components/ui/common/section/wrapper';

import Image from '@/components/ui/core/image';
import Text from '@/components/ui/core/text';

import Background from "@/components/background";
import SizableBox from '@/components/ui/common/section/sizable-box';

export default function WhoSection() {
  return (
    <>

      <Background 
        bgImg="blue" 
        placement="bottom" 
      />

      <Section 
        id="who" 
        bg="white" 
        ssx={{ 
          py: 0, overflow: "hidden",
          [breakpoints.mobile]: { py: 0 }
        }}
      >

        <SectionWrapper 
          direction={[,"column-reverse"]}
          ssx={{ 
            pt: "50px", my: "20px", gap: "40px",
            [breakpoints.tablet]: { mt: 0 },
          }}
        >

          <SizableBox width={["65%"]} ssx={{ mb: "60px" }}>
            <Text as="h1" color="black">
              Chi sono.
            </Text>

            <div
              sx={{
                borderLeftWidth: "3px",
                borderLeftStyle: "solid",
                borderLeftColor: "green",
                pl: "15px",
              }}
            >

              <Text as="h2" variant="h2_special" ssx={{ mb: "32px" }}>
                Progetto siti web & app, collaboro con Start Up e Aziende del settore, faccio consulenza.
              </Text>

              <Text color="black">
                Sono <b>Andrea Losavio</b>, sviluppatore web e consulente residente a <b>Milano</b>.<br />
                Laureato in Ingegneria Informatica al <b>Politecnico di Milano</b>.<br />
                Appassionato di programmazione sin dal lontano 2009.
              </Text>

            </div>
            
          </SizableBox>

          <SizableBox 
            width={["35%"]} 
            ssx={{ position :"relative", zIndex: 0 }}
          >

            <div
              sx={{
                borderRadius: "100%",
                overflow: "hidden",
                height: "300px",
                width: "300px",
                mx: "auto",
                boxShadow: "0px 9px 30px #00274eB0"
              }}
            >
              <Image
                src="/images/chisono/io.webp"
                alt="Chi sono"
                title="Chi è Andrea Losavio"
                priority
                width={1498}
                height={1880}
              />
            </div>
            
          </SizableBox>

        </SectionWrapper>

      </Section>

      <Background 
        bgImg="blue" 
        placement="top" 
        ssx={{ mb: "-1px" }}
      />

    </>
  )
}