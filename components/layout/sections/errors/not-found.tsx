import Image from "@/components/ui/core/image";

import { BriefcaseIcon, HomeIcon } from "@heroicons/react/24/outline";

import Section from "@/components/ui/common/section";
import SizableBox from "@/components/ui/common/section/sizable-box";
import SectionWrapper from "@/components/ui/common/section/wrapper";

import Link from "@/components/ui/core/link";
import Text from "@/components/ui/core/text";

import Background from "@/components/background";

import notFoundImg from "@/public/images/404.svg";

export default function NotFoundSection() {
  return (
    <>
      <Background bgImg="blue" placement="bottom" />

      <Section id="404" bg="white">
        <SectionWrapper
          direction={["column", "column"]}
          ssx={{ gap: "40px", py: "20px", textAlign: "center" }}
        >
          <SizableBox ssx={{ mx: "auto" }}>
            <Image src={notFoundImg} alt="Errore 404" priority />
          </SizableBox>

          <Text as="h1" color="black">
            Qualcosa è andato storto.
          </Text>

          <Text color="black" ssx={{ textAlign: "center", mt: "-20px" }}>
            La pagina su cui volevi atterrare, non esiste.
            <br />
            Se hai bisogno di un servizio o vuoi tornare alla Homepage, clicca
            qui sotto:
          </Text>

          <div>
            <Link variant="primary" href="/servizi" ssx={{ mr: "18px" }}>
              SERVIZI
              <BriefcaseIcon width={24} sx={{ color: "black", ml: 2 }} />
            </Link>

            <Link variant="secondary" href="/" ssx={{ ml: "18px" }}>
              HOMEPAGE
              <HomeIcon width={24} sx={{ color: "black", ml: 2 }} />
            </Link>
          </div>
        </SectionWrapper>
      </Section>

      <Background bgImg="blue" placement="top" ssx={{ mb: "-1px" }} />
    </>
  );
}
