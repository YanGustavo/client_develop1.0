import styled from 'styled-components';
import theme from 'styles/styled-components/theme';
export const HeaderStyle = styled.div`
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
@media screen and (min-width: 950px) {  
  .toggleMenu {
    display: none;
  }
  .profileContainer .userName {
    display: block;
  }
}
`;