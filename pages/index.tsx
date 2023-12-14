import NextLink from "next/link";

import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';

import { breakpoints } from '@/shared-data/theme';
import { Box, Heading, Link, Paragraph } from 'theme-ui';

import KeyPoint from '@/components/key-point';
import Layout from '@/components/layout';
import Section from '@/components/section';
import SectionWrapper from '@/components/section/wrapper';
import Image from "next/image";

export default function Homepage() {
  return (
    <Layout
      title="Sviluppo siti Web, Consulenza, Collaborazioni, ..."
      description="Vuoi raggiungere più clienti sul web in maniera che il messaggio arrivi in modo semplice, chiaro e preciso ai tuoi clienti? Scopri di più"
    >  
      <Section 
        id="hero" 
        bg="blue" 
        ssx={{
          display: "flex",
          height: "650px",
          paddingTop: "135px",
          [breakpoints.tablet]: { paddingTop: "80px" },
          [breakpoints.mobile]: { height: "auto", paddingTop: 0, paddingBottom: "30px" }
        }}
      >
        <SectionWrapper
          ssx={{
            flexDirection: "row",
            [breakpoints.tablet]: { flexDirection: "column-reverse" }
          }}
        >

          <Box
            sx={{
              position: "absolute",
              width: "40%",
              height: "70%",
              right: 0,
              bottom: 0,
              [breakpoints.tablet]: { width: "60%", bottom: "30px" },
              [breakpoints.mobile]: { position: "relative", alignSelf: "center", width: "100%", height: 200 }
            }}
          >
            <Image
              src="/images/programmer.svg"
              alt="Immagine rappresentativa di Andrea Losavio"
              fill
              sx={{ top: 0, left: 0}}
            />
          </Box>

          <Heading as="h1" variant="h1" sx={{ mb: "32px" }}>
            Vuoi elevare il tuo business a un livello completamente nuovo?
          </Heading>

          <Paragraph 
            sx={{ 
              mb: "70px", 
              maxWidth: "45%", 
              [breakpoints.mobile]: { maxWidth: "100%" } 
            }}
          >
            Hai bisogno di un sito web accattivante che raggiunga in modo {" "}
            <KeyPoint as="b">chiaro</KeyPoint>, {" "}
            <KeyPoint as="b" delay={250}>semplice</KeyPoint> e {" "}
            <KeyPoint as="b" delay={500}>preciso</KeyPoint> i tuoi clienti?
          </Paragraph>

          <Link as={NextLink} href="#design-accattivante" variant="primary">
            SCOPRI DI PIù

            <ArrowDownCircleIcon 
              width={24} 
              sx={{ color: "black", ml: 2 }} 
            />
          </Link>

        </SectionWrapper>
      </Section>
    </Layout>
  )
}
