import styled from 'styled-components';
import theme from 'styles/styled-components/theme';
export const MenuBottomStyle = styled.div`
.menuBottom {
  /* position: fixed;
  bottom: 0;
  left: calc(100vw - 75vw); */
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 50vw;
  
  background: #d5d5d5;
  border-radius: 25px 25px 0px 0px;
  z-index: 3; */
  position: absolute;
  bottom: 0;
  left: 5%;
  width: 90%;
  height: 60px;
  
}

.menuBottom ul {
  display: flex;  
}

.menuBottom ul li {
  position: relative;
  list-style: none;
  width: 60px;
  height: 60px;
  z-index: 1;
}

.menuBottom ul li a {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  font-weight: 500;
}

.menuBottom ul li a .icon {
  position: relative;
  display: block;
  line-height: 70px;
  text-align: center;
  transition: 0.5s;
}

.menuBottom ul li a .icon .MuiSvgIcon-root  {
  font-size: 26px;
  color: #373848;
}

.menuBottom ul li.active a .icon {
  transform: translateY(-26px);
}

.menuBottom ul li.active a .icon .MuiSvgIcon-root {
  color: #faf9fb;
  transition: 0.5s;
}

.indicator {
  position: absolute;
  height: 60px;
  width: 60px;
  background: ${theme.colors.heading_color};
  top: -50%;
  border-radius: 50%;
  border: 6px solid #faf9fb;
  transition: 0.5s;
}

.indicator::before {
  content: "";
  position: absolute;
  top: 50%;
  left: -20px;
  width: 18px;
  height: 18px;
  background: transparent;
  border-top-right-radius: 18px;
  box-shadow: 0px -10px 0 0 #faf9fb;
}

.indicator::after {
  content: "";
  position: absolute;
  top: 50%;
  right: -20px;
  width: 18px;
  height: 18px;
  background: transparent;
  border-top-left-radius: 18px;
  box-shadow: 0px -10px 0 0 #faf9fb;
}

.menuBottom ul li:nth-child(1).active ~ .indicator {
  transform: translateX(calc(60px * 0));
}

.menuBottom ul li:nth-child(2).active ~ .indicator {
  transform: translateX(calc(60px * 1));
}

.menuBottom ul li:nth-child(3).active ~ .indicator {
  transform: translateX(calc(60px * 2));
}

.menuBottom ul li:nth-child(4).active ~ .indicator {
  transform: translateX(calc(60px * 3));
}

.menuBottom ul li:nth-child(5).active ~ .indicator {
  transform: translateX(calc(60px * 4));
}

.menuBottom ul li:nth-child(6).active ~ .indicator {
  transform: translateX(calc(60px * 5));
}
@media screen and (min-width: 375px) {
  .menuBottom {
    /* left: calc(100vw - 99vw);
    width: 98vw; */
  }
}
@media screen and (min-width: 650px) {
  .menuBottom {
    /* left: calc(100vw - 90vw);
    width: 80vw; */
  }
}

@media screen and (min-width: 950px) {
  .menuBottom {
    /* left: calc(100vw - 90vw);
    width: 50vw; */
  }
}
@media screen and (min-width: 1500px) {
  .menuBottom {
    /* left: calc(100vw - 75vw);
    width: 50vw; */
  }
}
`;