import styled from 'styled-components';

import theme from 'styles/styled-components/theme';

export const HomeStyle = styled.div`
.container {
  width: 100vw;
  height: auto;
  padding: 10px;
  padding-bottom: 100px;
  position: relative;
}
.wrapper {
  width: 100%;
  height: auto;
  padding: 10px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
}
.menuCard {
  width: 100%;
}

.row {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap; 
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 10px 0;
  padding: 10px 0;
}
.row::-webkit-scrollbar {
  display: none;
}
.item-card-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap; 
  flex-direction: row;
  position: relative;
}
@media screen and (min-width: 40em) {
  .row {
        /* flex: 0 1 calc(50% - 1em); */
    }
  .item-card-wrapper {
        /* display: flex;
        flex-wrap: wrap;
        justify-content: space-between; */
    }
  }
 
@media screen and (min-width: 60em) {
  .row {
        /* flex: 0 1 calc(25% - 1em); */
    }
    .item-card-wrapper {
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
  .container {
    width: calc(100vw - 350px);
    padding: 10px 30px;
  }
}
`;
