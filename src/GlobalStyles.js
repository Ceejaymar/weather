import { createGlobalStyle } from 'styled-components';
import '@fontsource/open-sans';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Open Sans';
  }

  body {
    background-color: #2f3044;
  }
`;
