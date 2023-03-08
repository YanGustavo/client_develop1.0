import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  

  ${({ theme }) => css`
html {
      --scrollbarBG: #CFD8DC;
  --thumbBG: #90A4AE;
      font-size: 100%;
    }
    body::-webkit-scrollbar {
  width: 11px;
}
    body {      
    scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);
      font-size: ${theme.font.sizes.xxxsmall};
      background: ${theme.colors.background};      
    min-width: 300px;
}
body::-webkit-scrollbar-track {
  background: var(--scrollbarBG);
}
body::-webkit-scrollbar-thumb {
  background-color: var(--thumbBG) ;
  border-radius: 6px;
  border: 3px solid var(--scrollbarBG);
}

    body,
    input,
    textarea,
    button {
      font-family: ${theme.font.family};
    }
  `}
  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
a {
color: inherit;
    text-decoration: none; 
}
ul {
  list-style: none;
}
img {
  max-width: 100%;
}
.lineGradientTop {
  height: 5px;
  width: 100vw;
  background: linear-gradient(to left, rgb(0, 214, 4) , rgb(114, 247, 114), rgb(0, 134, 255),rgb(46, 206, 255),rgb(164, 0, 225),rgb(199, 57, 255),rgb(255, 55, 168),rgb(255, 37, 58),rgb(255, 95, 95),rgb(255, 138, 0),rgb(255, 193, 18) ,rgb(255, 193, 18), rgb(252, 208, 0) ,rgb(255, 255, 74));
  z-index:108;
  animation-name: invertLineGradientTop;
}
`;

export default GlobalStyles;
