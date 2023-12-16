import Layout from '@/components/layout';
import ExperiencesSection from '@/sections/about-me/experiences.section';
import ProductionSection from '@/sections/about-me/production.section';
import WhoSection from '@/sections/about-me/who.section';

export default function ChiSono() {
  return (
    <Layout
      title="Chi sono e cosa faccio"
      description="Progetto siti web, collaboro con Start Up e Aziende del settore, faccio consulenza, e tanto altro. Scopri di più"
    >
      <WhoSection />
      <ExperiencesSection />
      <ProductionSection />
    </Layout>
  )
}