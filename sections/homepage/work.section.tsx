import { breakpoints } from "@/shared-data/theme";
import { Paragraph } from "theme-ui";

import Section from "@/components/section";
import SectionWrapper from "@/components/section/wrapper";

import Background from "@/components/background";
import WorkList from "@/components/work/list";

export default function WorkSection() {
  return (
    <>

      <Section 
        id="work" 
        bg="lightBlue"
      >
        <SectionWrapper direction={["column"]} ssx={{ py: "10px" }}>

          <Paragraph 
            color="blue" 
            sx={{ 
              fontSize: "14px", 
              fontWeight: 600, 
              opacity: 0.7, 
              textAlign: "center", 
              mt: "-50px",
              mb: "30px",
              [breakpoints.mobile]: { mt: "-15px" }
            }}
          >
            LAVORATO CON
          </Paragraph>

          <WorkList />

        </SectionWrapper>
      </Section>

      <Background 
        bgImg="light-short" 
        placement="bottom" 
      />

    </>
  )
}
