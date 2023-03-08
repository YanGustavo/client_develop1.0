import styled from 'styled-components';

import theme from 'styles/styled-components/theme';

export const HomeStyle = styled.div`
.row {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap; 
  flex-direction: row;
  overflow-x: scroll;
  //overflow-y: hidden;
  margin: 10px 0;
  padding: 10px 0;
}
.row::-webkit-scrollbar {
  display: none;
}

@media screen and (min-width: 40em) {
  .row {
        /* flex: 0 1 calc(50% - 1em); */
    }
  }
 
@media screen and (min-width: 60em) {
  .row {
        /* flex: 0 1 calc(25% - 1em); */
    }   
   
}
 
 
@media screen and (min-width: 52em) {
    .centered {
        
    }
}
@media screen and (min-width: 650px) {
  /* .row {
    justify-content: space-between;
  } */
}
@media screen and (min-width: 950px) {
  
}
`;
