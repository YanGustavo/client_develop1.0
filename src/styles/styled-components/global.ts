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

`;

export default GlobalStyles;
