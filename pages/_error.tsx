import Layout from "@/components/layout"

type ErrorProps = { statusCode: string }

export default function Error(props: ErrorProps) {
  return (
    <Layout
      title="Si è verificato un errore"
      metas={
        <meta name="robots" content="noindex, nofollow" />
      }
    >

      500

    </Layout>
  )
}

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}