import Layout from '@/components/layout';
import ContactFormSection from '@/sections/contact/contact-form.section';

import InterestedServicesSection from '@/sections/contact/interested-services.section';
import RequestSection from '@/sections/contact/request.section';

export default function Contattami() {
  return (
    <Layout
      title="Contattami per un sito web, consulenza, ed altro"
      description="Contattami per avere il tuo preventivo completamente gratuito sui servizi web che offro. Scopri di più"
    >
      <RequestSection />
      <ContactFormSection />
      <InterestedServicesSection />
    </Layout>
  )
}