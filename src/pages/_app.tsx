import React from 'react';
import type { AppProps } from 'next/app';

/* Global Styling */
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import { theme } from '../styles/theme';

/* Layouts */
import { Header } from '../layouts/Header';
import { Footer } from '../layouts/Footer';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
