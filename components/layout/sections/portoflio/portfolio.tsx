import Section from "@/components/ui/common/section";
import SectionWrapper from "@/components/ui/common/section/wrapper";

import PortfolioList from "@/components/portfolio/list";

export default function PortfolioSection() {
  return (
    <Section id="portfolio" bg="lightBlue">
      <SectionWrapper
        direction={["column", "column"]}
        ssx={{ textAlign: "center", gap: "25px" }}
      >
        <PortfolioList />
      </SectionWrapper>
    </Section>
  );
}
