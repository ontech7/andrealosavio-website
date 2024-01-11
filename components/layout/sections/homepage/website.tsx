import Image from "@/components/ui/core/image"

import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'

import Section from '@/components/ui/common/section'
import SizableBox from '@/components/ui/common/section/sizable-box'
import SectionWrapper from '@/components/ui/common/section/wrapper'

import Link from '@/components/ui/core/link'
import Text from '@/components/ui/core/text'

import HighlightText from '@/components/ui/common/highlight-text'
import KeyPoint from '@/components/ui/common/key-point'

export default function WebsiteSection() {
  return (
    <>
    
      <Section 
        id="website" 
        bg="lightBlue"
      >
        <SectionWrapper 
          direction={[,"column-reverse"]} 
          ssx={{ gap: "40px" }}
        >

          <SizableBox>
            <Text as="h2">
              Perché è importante avere un {" "}
              <HighlightText bg="yellow">Sito Web</HighlightText>
            </Text>

            <Text color='black'>
              Quando un potenziale cliente cercherà il tuo prodotto o 
              servizio su Google, se non trova il tuo 
              sito, <b>troverà quello del tuo concorrente</b>, e il 
              tuo business potrebbe risentirne.
            </Text>

            <Text color='black'>
              Un sito web che si mostra professionale, aumenta la credibilità della 
              tua attività, fornendoti maggiore visibilità e aiutandoti a costruire 
              la tua <b>Brand Identity</b>.
            </Text>

            <Text color='black'>
              Bisogna prestare attenzione 
              ai <KeyPoint as="b" color="darkGreen">minimi dettagli</KeyPoint>, ed è quello che farò con te.
            </Text>

            <Link
              variant="secondary" 
              href="/contattami" 
              ssx={{ alignSelf: "flex-start", mt: "25px" }}
            >
              INIZIAMO

              <ArrowRightCircleIcon
                width={24} 
                sx={{ color: "black", ml: 2 }} 
              />
            </Link>
          </SizableBox>

          <SizableBox>
            <Image
              src="/images/projects/caffe-barocco/all-together.png"
              alt="Caffè Barocco Web Design by Andrea Losavio"
              priority
              width={1158}
              height={668}
            />
          </SizableBox>

        </SectionWrapper>
      </Section>

    </>
  )
}
