import type { NextPage } from 'next';

import Layout from "@/components/layout";

import NotFoundSection from "@/components/layout/sections/errors/not-found";

const Custom404Page: NextPage = () => {
  return (
    <Layout
      title="Pagina non trovata"
      metas={
        <meta name="robots" content="noindex, nofollow" />
      }
    >

      <NotFoundSection />

    </Layout>
  )
}

export default Custom404Page;