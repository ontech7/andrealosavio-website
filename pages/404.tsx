import Layout from "@/components/layout";

import NotFoundSection from "@/components/layout/sections/errors/not-found";

export default function Custom404Page() {
  return (
    <Layout
      title="Pagina non trovata"
      metas={<meta name="robots" content="noindex, nofollow" />}
    >
      <NotFoundSection />
    </Layout>
  );
}
