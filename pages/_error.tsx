import Layout from "@/components/layout"

import ServerErrorSection from "@/sections/errors/500.sections"

type ErrorProps = { statusCode: string }

export default function Error(props: ErrorProps) {
  return (
    <Layout
      title="Si è verificato un errore"
      metas={
        <meta name="robots" content="noindex, nofollow" />
      }
    >

      <ServerErrorSection />

    </Layout>
  )
}

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}