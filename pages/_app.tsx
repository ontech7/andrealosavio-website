import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { theme } from '@/shared-data/theme';
import { ThemeUIProvider } from 'theme-ui';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeUIProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeUIProvider>
  )
}
