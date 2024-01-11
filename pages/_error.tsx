import Layout from "@/components/layout"

import ServerErrorSection from "@/components/layout/sections/errors/server-error"

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