
import { breakpoints } from '@/shared-data/theme';

import Section from '@/components/section';
import SectionWrapper from '@/components/section/wrapper';

import Background from "@/components/background";
import SizableBox from '@/components/section/sizable-box';
import Image from 'next/image';
import { Box, Heading, Paragraph } from 'theme-ui';

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
            <Heading as="h1" variant="h1" color="black">
              Chi sono.
            </Heading>

            <Box
              sx={{
                borderLeftWidth: "3px",
                borderLeftStyle: "solid",
                borderLeftColor: "green",
                pl: "15px",
              }}
            >

              <Heading as="h2" variant="h2_special" sx={{ mb: "32px" }}>
                Progetto siti web & app, collaboro con Start Up e Aziende del settore, faccio consulenza.
              </Heading>

              <Paragraph color="black">
                Sono <b>Andrea Losavio</b>, sviluppatore web e consulente residente a <b>Milano</b>.<br />
                Laureato in Ingegneria Informatica al <b>Politecnico di Milano</b>.<br />
                Appassionato di programmazione sin dal lontano 2009.
              </Paragraph>

            </Box>
            
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
