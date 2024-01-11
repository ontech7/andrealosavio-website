import Layout from '@/components/layout';

import BrandSection from '@/components/layout/sections/services/brand';
import InterestedContactSection from '@/components/layout/sections/services/interested-contact';
import ServicesSection from '@/components/layout/sections/services/services';

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