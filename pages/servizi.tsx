import Layout from '@/components/layout';

import BrandSection from '@/sections/services/brand.section';
import InterestedContactSection from '@/sections/services/interested-contact.section';
import ServicesSection from '@/sections/services/services.section';

export default function Servizi() {
  return (
    <Layout
      title="Servizi di consulenza, creazione siti web, e tanto altro"
      description="Creazione di siti web, eCommerce, consulenza, progettazione e design, insegnante on-demand e collaborazioni con Start Up e Aziende. Scopri di più"
    >
      <BrandSection />
      <ServicesSection />
      <InterestedContactSection />
    </Layout>
  )
}