import Layout from '@/components/layout';

import ContactFormSection from '@/components/layout/sections/contact/contact-form';
import InterestedServicesSection from '@/components/layout/sections/contact/interested-services';
import RequestSection from '@/components/layout/sections/contact/request';

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