import Section from "@/components/ui/common/section";
import SectionWrapper from "@/components/ui/common/section/wrapper";

import ContactForm from "@/components/contact-form";

export default function ContactFormSection() {
  return (
    <Section id="contact-form" bg="transparent" ssx={{ mt: "-15%" }}>
      <SectionWrapper>
        <div
          sx={{
            maxWidth: "800px",
            width: "100%",
            mx: "auto",
            padding: "40px 20px",
            backgroundColor: "#d8ebff",
            boxShadow: "0px 2px 10px #3334",
            borderRadius: "10px",
          }}
        >
          <ContactForm />
        </div>
      </SectionWrapper>
    </Section>
  );
}
