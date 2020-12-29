import { AppProps } from 'next/dist/next-server/lib/router/router';
import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

/* Global Styling */
import GlobalStyle from '../styles/GlobalStyle';
import { theme } from '../styles/theme';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
