import type { NextPage } from 'next';

import Layout from '@/components/layout';
import InterestedWorkSection from '@/components/layout/sections/portoflio/interested-work';

import MyWorksSection from '@/components/layout/sections/portoflio/my-works';
import PortfolioSection from '@/components/layout/sections/portoflio/portfolio';

const PortfolioPage: NextPage = () => {
  return (
    <Layout
      title="Il mio portfolio"
      description="Qui sono racchiusi tutti i progetti personali e clienti con cui ho lavorato sinora. Scopri di più"
    >
      <MyWorksSection />
      <PortfolioSection />
      <InterestedWorkSection />
    </Layout>
  )
}

export default PortfolioPage;