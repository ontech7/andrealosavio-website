import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="it">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="keywords" content="siti web,sviluppo web,consulenza,programmatore,clienti,ecommerce,blog,collaborazioni,start up,aziende,accattivante,bello" />
        <meta name="author" content="Andrea Losavio" />
        
        <link rel="icon" href="/images/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/website-thumbnail.png" />
        <meta property="og:url" content="https://www.andrealosavio.com/" />
        <meta property="og:locale" content="it_IT" />

        <meta property="twitter:image" content="/images/website-thumbnail.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
