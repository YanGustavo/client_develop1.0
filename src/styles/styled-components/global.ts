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
      font-size: 100%;
    }

    body {
      font-size: ${theme.font.sizes.xxxsmall};
      background-color: ${theme.colors.gray_50};
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
  position: absolute;
  top: 60px;
  background: linear-gradient(to right, rgb(255, 255, 74), rgb(252, 208, 0), rgb(255, 193, 18), rgb(255, 193, 18), rgb(255, 138, 0), rgb(255, 95, 95), rgb(255, 37, 58), rgb(255, 55, 168), rgb(199, 57, 255), rgb(164, 0, 225), rgb(46, 206, 255), rgb(0, 134, 255), rgb(114, 247, 114), rgb(0, 214, 4));
  height: 5px;
  width: 100vw;
  background-image: linear-gradient(to right, rgb(255, 255, 74), rgb(252, 208, 0), rgb(255, 193, 18), rgb(255, 193, 18), rgb(255, 138, 0), rgb(255, 95, 95), rgb(255, 37, 58), rgb(255, 55, 168), rgb(199, 57, 255), rgb(164, 0, 225), rgb(46, 206, 255), rgb(0, 134, 255), rgb(114, 247, 114), rgb(0, 214, 4));
z-index:2;
}

`;

export default GlobalStyles;
