import Image from "@/components/core/image";

import { breakpoints } from '@/shared-data/theme';

import Section from '@/components/section';
import SectionWrapper from '@/components/section/wrapper';

import Text from '@/components/core/text';

import Background from "@/components/background";
import SizableBox from '@/components/section/sizable-box';

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
            pt: "100px", my: "20px",
            [breakpoints.tablet]: { pt: "50px", mt: 0 },
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
            ssx={{ 
              position: "absolute", right: 0, bottom: "-60px", justifyContent: "flex-end",
              [breakpoints.mobile]: { position: "unset", mb: "20px", width: "100%" }
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
            
          </SizableBox>

        </SectionWrapper>

        <Background
          bgImg="blue"
          placement="top"
        />

      </Section>

    </>
  )
}
