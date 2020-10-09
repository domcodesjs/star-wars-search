import { createGlobalStyle } from 'styled-components';
import bgImg from './stars-bg.jpg';

const GlobalStyle = createGlobalStyle`  
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    box-sizing: inherit;
    font-size: 62.5%;
  }

  body {
    background: url(${bgImg});
    font-size: 1.6rem;
    font-family: 'Space Mono', monospace;
  }

  h1,
  h2,
  h3,
  p {
    margin: 0;
  }
`;

export default GlobalStyle;
