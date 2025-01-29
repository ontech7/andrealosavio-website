import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="it">
      <Head />
      <body>
        <style>{`html { --hr: 31deg; filter: hue-rotate(var(--hr)); } img { filter: hue-rotate(calc(360deg - var(--hr))); }`}</style>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
