import "@/styles/globals.css";

import type { AppProps } from "next/app";

import theme from "@/shared-data/theme";
import { ThemeProvider } from "@theme-ui/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
