import styled from 'styled-components';
import theme from 'styles/styled-components/theme';
export const HeaderStyle = styled.div`
header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
  height: 60px;
  width: 100%;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.1);
  z-index: 108;
} 
  .logo {
  min-width: 80px;
  width: 150px;
}
.inputBox {
  background: #ffffff;
  border-radius: 25px;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 8px 15px;
  width: 120px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
}
.inputBox .searchIcon {
  color: #787a84;
  font-size: 20px;
}
.inputBox input {
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: transparent;
  color: #787a84;
  padding-left: 8px;
  font-size: 14px;
  font-weight: 500;
}
.shoppingCart {
  position: relative;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.shoppingCart .cart {
  font-size: 30px;
  color: #373848;
}
.shoppingCart .cart_content {
  width: 20px;
  height: 20px;
  background: ${theme.colors.heading_color};
  border-radius: 100%;
  min-width: 20px;
  min-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: -8px;
}
.shoppingCart .cart_content p {
  font-weight: 500;
  color: #faf9fb;
}
.shoppingCart .noCartItem {
  display: none;
}
.profileContainer {
  display: flex;
  align-items: center;
}
.profileContainer .imgBox {
  width: 40px;
  min-width: 40px;
  height: 40px;
  border-radius: 100%;
  background: #444;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.profileContainer .imgBox img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.profileContainer .userName {
  font-size: 16px;
  margin-left: 8px;
  font-weight: 500;
  display: none;
}
Link, a {
  text-decoration:none;
}
.toggleMenu {
  transform: rotate(90deg);
}
.toggleMenu .toggleIcon {
  color: #373848;
  font-size: 30px !important;
}
@keyframes toggleMenuAnimate {
  0% {
        transform: rotate(0deg)
    }
    20% {
        transform: rotate(170deg)
    }
    25% {
        transform: rotate(140deg) translate(1px, 0);
    }
    30% {
        transform: rotate(170deg) translate(2px, 0);
    }
    

    45% {
        transform: rotate(0deg) translate(0, 0);
    }
    55% {
        transform: rotate(0deg) translate(0, 0);
    }


    60% {
        transform: rotate(-30deg) translate(1px, 0);
    }
    70% {
        transform: rotate(0deg) translate(2px, 0)
    }
    80% {
        transform: rotate(-30deg) translate(3px, 0)
    }
    90% {
        transform: rotate(0deg) translate(3px, 0)
    }
    100% {
        transform: rotate(-30deg)  translate(4px, 0)
    }
}

.lineGradientTop {
  position: absolute;
  top: 60px;
  left: 0;  
  height: 5px;
  width: 100vw;
  background: linear-gradient(to left, rgb(0, 214, 4) , rgb(114, 247, 114), rgb(0, 134, 255),rgb(46, 206, 255),rgb(164, 0, 225),rgb(199, 57, 255),rgb(255, 55, 168),rgb(255, 37, 58),rgb(255, 95, 95),rgb(255, 138, 0),rgb(255, 193, 18) ,rgb(255, 193, 18), rgb(252, 208, 0) ,rgb(255, 255, 74));
  z-index:108;
  animation-name: invertLineGradientTop;
}
@media screen and (min-width: 650px) {
  .inputBox {
    width: 60%;
  }
}
@media screen and (min-width: 950px) {  
  .toggleMenu {
    display: none;
  }
  .profileContainer .userName {
    display: block;
  }
}
 @keyframes invertLineGradientTop {  
  from,  
      to {  
           animation-timing-function: ease-in;  
           box-shadow:  
                0 0 0 hsl(0,0%,80%),  
                0.1rem 0 0 hsl(0,0%,100%),  
                -0.2rem 0 0.75rem 0 hsla(0,0%,0%,0.3);  
           transform: rotateY(-10deg);  
      }  
      25%,  
      75% {  
           animation-timing-function: ease-out;  
           box-shadow:  
                0 0 0 hsl(0,0%,80%),  
                0 0 0 hsl(0,0%,100%),  
                -0.25rem -0.05rem 1rem 0.15rem hsla(0,0%,0%,0.3);  
           transform: rotateY(0deg);  
      }  
      50% {  
           animation-timing-function: ease-in;  
           box-shadow:  
                -0.1rem 0 0 hsl(0,0%,80%),  
                0 0 0 hsl(0,0%,100%),  
                -0.3rem -0.1rem 1.5rem 0.3rem hsla(0,0%,0%,0.3);  
           transform: rotateY(10deg);  
      }   
 } 
`;
//  background-image: linear-gradient(to right, rgb(255, 255, 74), rgb(252, 208, 0), rgb(255, 193, 18), rgb(255, 193, 18), rgb(255, 138, 0), rgb(255, 95, 95), rgb(255, 37, 58), rgb(255, 55, 168), rgb(199, 57, 255), rgb(164, 0, 225), rgb(46, 206, 255), rgb(0, 134, 255), rgb(114, 247, 114), rgb(0, 214, 4));
//   background: linear-gradient(to right, rgb(0, 214, 4) , rgb(114, 247, 114), rgb(0, 134, 255),rgb(46, 206, 255),rgb(164, 0, 225),rgb(199, 57, 255),rgb(255, 55, 168),rgb(255, 37, 58),rgb(255, 95, 95),rgb(255, 138, 0),rgb(255, 193, 18) ,rgb(255, 193, 18), rgb(252, 208, 0) ,rgb(255, 255, 74));