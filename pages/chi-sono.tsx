import type { NextPage } from 'next';

import Layout from '@/components/layout';

import ExperiencesSection from '@/components/layout/sections/about-me/experiences';
import MyCareerSection from '@/components/layout/sections/about-me/my-career';
import ProductionSection from '@/components/layout/sections/about-me/production';
import WhoSection from '@/components/layout/sections/about-me/who';

const ChiSonoPage: NextPage = () => {
  return (
    <Layout
      title="Chi sono e cosa faccio"
      description="Progetto siti web, collaboro con Start Up e Aziende del settore, faccio consulenza, e tanto altro. Scopri di più"
    >
      <WhoSection />
      <ExperiencesSection />
      <ProductionSection />
      <MyCareerSection />
    </Layout>
  )
}

export default ChiSonoPage;