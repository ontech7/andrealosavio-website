import Head from "next/head";

export default function CustomHead({ 
  pageTitle, 
  pageDescription,
  metas
}: {
  pageTitle: string
  pageDescription: string
  metas?: JSX.Element | JSX.Element[]
}) {
  const titleOutput = `Andrea Losavio | ${pageTitle}`

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>{titleOutput}</title>
      <meta name="description" content={pageDescription} />
      <meta name="author" content="Andrea Losavio" />

      <link rel="icon" href="/images/favicon.png" type="image/png" />
      <link rel="shortcut icon" href="/favicon.ico" />
    
      <meta property="og:title" content={titleOutput} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/website-thumbnail.png" />
      <meta property="og:url" content="https://www.andrealosavio.com/" />
      <meta property="og:locale" content="it_IT" />

      <meta property="twitter:title" content={titleOutput} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content="/images/website-thumbnail.png" />

      {metas}
    </Head>
  )
}
