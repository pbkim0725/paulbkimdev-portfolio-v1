import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 1rem;
  }

  body {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    text-rendering: optimizeLegibility;
  }


  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
