import styled from 'styled-components';

import theme from 'styles/styled-components/theme';
export const BaseTemplate = styled.div`
 margin:0;
  padding: 0;
  width: 100vw;
  height: 100vh;  
  position: relative;
  overflow-x: hidden;
  .BaseTemplate::-webkit-scrollbar {
  display: none;
}
`;
export const BaseMain = styled.main`
  margin-top: 105px;
  width: 100vw;
  height: auto;
  position: relative;
  display: block;
  position: relative;

@media screen and (min-width: 541px) {
  main {
    width: 100vw;
  }
}
@media screen and (min-width: 650px) {
  main {
    width: 100vw;
  }
}
@media screen and (min-width: 950px) {
  main {
    width: calc(100vw - 325px);
  }
}
@media screen and (min-width: 1100px) {
  main {
    width: calc(100vw - 350px);
  }
}

`;
