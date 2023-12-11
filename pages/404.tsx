import Layout from "@/components/layout";

export default function Custom404() {
  return (
    <Layout
      title="Pagina non trovata"
      metas={
        <meta name="robots" content="noindex, nofollow" />
      }
    >

      404

    </Layout>
  )
}