import styled from 'styled-components';

import theme from 'styles/styled-components/theme';

export const BaseStyle = styled.div`
.BaseTemplate {
  width: 100vw;
  height: 100vh;
  background: ${theme.colors.background};
  overflow-x: hidden;
  position: relative;
}
.BaseTemplate::-webkit-scrollbar {
  display: none;
}
main {
  width: 100%;
  /* height: calc(100% - 60px); */
  height: auto;
  position: relative;
  margin-top: 60px;
}
@media screen and (min-width: 650px) {

}
@media screen and (min-width: 950px) {
  main {
    display: flex;
  }
}
`;
