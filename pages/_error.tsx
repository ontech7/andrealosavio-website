import type { NextPage, NextPageContext } from "next"

import Layout from "@/components/layout"

import ServerErrorSection from "@/components/layout/sections/errors/server-error"

interface IErrorProps { 
  statusCode?: number 
}

const Error: NextPage<IErrorProps> = ({ statusCode }) => {
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

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error;

