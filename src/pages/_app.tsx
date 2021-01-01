import React from 'react';
import type { AppProps } from 'next/app';

/* Global Styling */
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import { theme } from '../styles/theme';

/* Layouts */
import { Header } from '../components/Header';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
