import '@/styles/globals.css';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import theme from '@/shared-data/theme';
import { ThemeProvider } from '@theme-ui/core';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App;