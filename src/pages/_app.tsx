import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

/* Global Styling */
import GlobalStyle from '../styles/GlobalStyle';
import { theme } from '../styles/theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
