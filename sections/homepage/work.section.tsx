import Section from "@/components/section";
import SectionWrapper from "@/components/section/wrapper";
import WorkItem from "@/components/work/item";
import { breakpoints } from "@/shared-data/theme";
import { worksMap } from "@/shared-data/work";
import { Box, Paragraph } from "theme-ui";

export default function WorkSection() {
  return (
    <Section 
      id="work" 
      bg="lightBlue"
    >
      <SectionWrapper ssx={{ flexDirection: "column", py: "10px" }}>

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

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "40px"
          }}
        >
          {worksMap.map(item => 
            <WorkItem {...item} />
          )}
        </Box>

      </SectionWrapper>
    </Section>
  )
}
