import Layout from "@/components/layout";

import NotFoundSection from "@/sections/errors/404.section";

export default function Custom404() {
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