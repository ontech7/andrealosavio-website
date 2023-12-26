import Layout from '@/components/layout';

import MyWorksSection from '@/sections/portoflio/my-works.section';
import PortfolioSection from '@/sections/portoflio/portfolio.section';

export default function Portfolio() {
  return (
    <Layout
      title="Il mio portfolio"
      description="Qui sono racchiusi tutti i progetti personali e clienti con cui ho lavorato sinora. Scopri di più"
    >
      <MyWorksSection />
      <PortfolioSection />
    </Layout>
  )
}