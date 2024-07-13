import { breakpoints } from "@/shared-data/theme";

import Text from "@/components/ui/core/text";

import Section from "@/components/ui/common/section";
import SectionWrapper from "@/components/ui/common/section/wrapper";

import Background from "@/components/background";
import WorkList from "@/components/work/list";

export default function WorkSection() {
  return (
    <>
      <Section id="work" bg="lightBlue">
        <SectionWrapper direction={["column"]} ssx={{ py: "10px" }}>
          <Text
            color="blue"
            ssx={{
              fontSize: "14px",
              fontWeight: "semiBold",
              opacity: 0.7,
              textAlign: "center",
              mt: "-50px",
              mb: "30px",
              [breakpoints.mobile]: { mt: "-15px" },
            }}
          >
            LAVORATO CON
          </Text>

          <WorkList />
        </SectionWrapper>
      </Section>

      <Background bgImg="light-short" placement="bottom" />
    </>
  );
}
