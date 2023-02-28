import styled from 'styled-components';

import theme from 'styles/styled-components/theme';

export const BaseStyle = styled.div`

.HomeTemplate {
  width: 100vw;
  height: 100vh;
  background: #faf9fb;
  overflow-x: hidden;
}

.HomeTemplate::-webkit-scrollbar {
  display: none;
}



main {
  width: 100vw;
  min-height: calc(100vh - 60px);
  height: auto;
  position: relative;  
}



/* Main Container */
.mainContainer {
  width: 100%;
  min-height: calc(100vh - 60px);
  height: auto;
  background: #faf9fb;
  padding: 10px;
  padding-bottom: 100px;
  top: 60px;
  position: relative;
}

.banner {
  width: 100%;
  height: 130px;
  border-radius: 10px;
  background: url("https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fbanner.png?alt=media&token=7e244d84-8821-477d-b273-4c9381a474fb")
    no-repeat center;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0px 10px;
}

.deliveryPic {
  position: absolute;
  right: -60px;
  bottom: -10px;
  width: 240px;
}

.bannerContent {
  padding: 8px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin: 15px 0;
}

.bannerContent h3 {
  font-size: 18px;
  font-weight: 500;
  color: #2a2b3c;
}

.bannerContent p {
  font-size: 14px;
  width: 200px;
  color: #989594;
  margin: 5px 0;
}

.bannerContent p span {
  color: ${theme.colors.heading_color};
  font-weight: 500;
}

.bannerContent a {
  background: ${theme.colors.heading_color};
  padding: 5px 15px;
  border-radius: 100vw;
  color: #faf9fb;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

.bannerContent a:hover {
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
  transition: 0.5s;
}

.dishContainer {
  width: 100%;
  padding: 10px 0;
}

.menuCard {
  width: 100%;
}

.subMenuContianer,
.viewAll {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.subMenuContianer h3 {
  font-size: 16px;
  font-weight: 500;
  color: #2a2b3c;
}

.subMenuContianer .viewAll p {
  font-size: 12px;
  color: ${theme.colors.heading_color};
  font-weight: 400;
}

.subMenuContianer .viewAll i {
  background: ${theme.colors.heading_color};
  width: 20px;
  height: 20px;
  min-width: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}

.subMenuContianer .viewAll i .MuiSvgIcon-root {
  font-size: 16px !important;
  color: #faf9fb;
}

.rowContainer {
  display: flex;
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 10px 0;
  padding: 10px 0;
  gap: 3rem;
}

.rowContainer::-webkit-scrollbar {
  display: none;
}

.rowMenuCard {
  width: 80px;
  min-width: 80px;
  height: 100px;
  border-radius: 10px;
  background: #fff;
  margin-right: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
  transition: 0.5s;
  cursor: pointer;
}

.rowMenuCard:hover,
.rowMenuCard.active {
  background: ${theme.colors.heading_color};
}

.rowMenuCard .imgBox {
  width: 150px;
  height: 150px;
  min-width: 100px;
  min-height: 100px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  overflow: hidden;
}

.rowMenuCard:hover .imgBox,
.rowMenuCard.active .imgBox {
  background: #faf9fb;
}

.rowMenuCard .imgBox img {
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  margin:0;
}

.rowMenuCard:hover .imgBox img,
.rowMenuCard.active .imgBox img {
  width: 80%;
  height: 80%;
  transition: 0.5s;
}

.rowMenuCard h3 {
  font-size: 14px;
  font-weight: 500;
  color: ${theme.colors.heading_color};
  transition: 0.5s;
}

.rowMenuCard:hover h3,
.rowMenuCard.active h3 {
  color: #faf9fb;
}

.rowMenuCard .loadMenu {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: ${theme.colors.heading_color};
  transition: 0.5s;
}

.rowMenuCard:hover .loadMenu,
.rowMenuCard.active .loadMenu {
  background: #faf9fb;
}

.rowMenuCard .loadMenu .MuiSvgIcon-root {
  font-size: 14px !important;
  color: #faf9fb;
}

.rowMenuCard:hover .loadMenu .MuiSvgIcon-root,
.rowMenuCard.active .loadMenu .MuiSvgIcon-root {
  color: ${theme.colors.heading_color};
}

.dishItemContainer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.itemCard {
  width: 160px;
  height: 180px;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 10px 0;
}

.isFavourite {
  position: absolute;
  top: 80px;
  right: 10px;
  transition: 0.5s;
}

.isFavourite .MuiSvgIcon-root {
  font-size: 18px;
  color: #ff000088;
}

.isFavourite.active .MuiSvgIcon-root {
  color: #ff0000;
  filter: drop-shadow(0px 0px 8px #ff0000);
}

.itemCard .imgBox {
  position: absolute;
  top: -10px;
  width: 100px;
  height: 100px;
  border-radius: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.itemCard .imgBox img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.itemImg {
  width: 60%;
  position: absolute;
  top: 0;
}

.itemContent {
  width: 100%;
  background: #fff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  padding: 10px;
  padding-top: 50px;
  border-radius: 15px;
}

.itemContent .itemName {
  font-size: 16px;
}

.itemContent .bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.itemContent .bottom .rating .MuiSvgIcon-root {
  font-size: 14px;
}

.itemContent .bottom .price {
  font-size: 16px;
}

.itemContent .bottom .price span {
  color: ${theme.colors.heading_color};
  font-size: 12px;
}

.itemContent .addToCart {
  background: ${theme.colors.heading_color};
  width: 25px;
  height: 25px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}

.itemContent .addToCart .MuiSvgIcon-root {
  color: #faf9fb;
  font-size: 16px;
}

.orange {
  color: ${theme.colors.heading_color} !important;
}

.gray {
  color: #373848 !important;
}

.rightMenu {  
  position: fixed;
  top: 65px;
  right: 0;
  width: 350px;
  height: calc(100vh - 60px);
  background: #fff; 
  z-index: 105;
  display: flex;
  flex-direction: column;
  align-items: center;  
  transform: translateX(200%);
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.1);
}

.rightMenu.active {
  transform: translateX(0%);
}

.debitCardContainer {
  padding: 10px;
  width: 100%;
  height: auto;
  padding: 30px 20px;
  position: relative;
}

.debitCard {
  position: relative;
  width: 100%;
  height: 170px;
  min-width: 300px;
  min-height: 170px;
  border-radius: 15px;
}

.debitCard::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f8901c; // ${theme.colors.heading_color};
  transform: rotate(5deg);
  border-radius: 15px;
  filter: blur(2px);
  z-index: -2;
}

.debitCard::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    35deg,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.1)
  );
  border-radius: 15px;
  backdrop-filter: blur(10px);
  z-index: -1;
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.cardGroup {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.cardLogo,
.cardChip,
.card_number,
.card_name,
.card_from,
.card_to,
.card_ring {
  position: absolute;
}

.cardLogo {
  width: 60px;
  top: 30px;
  right: 30px;
  height: auto;
}

.cardChip {
  width: 40px;
  top: 50px;
  left: 30px;
  height: auto;
}

.card_number,
.card_from,
.card_to,
.card_name {
  color: #fff;
  font-weight: 400;
  letter-spacing: 2px;
}

.card_number {
  left: 30px;
  bottom: 60px;
}

.card_name {
  font-size: 12px;
  bottom: 30px;
  left: 30px;
}

.card_from {
  font-size: 12px;
  bottom: 30px;
  right: 90px;
}

.card_to {
  bottom: 30px;
  right: 30px;
  font-size: 12px;
}

.card_ring {
  height: 400px;
  width: 400px;
  border-radius: 100vw;
  background: transparent;
  border: 50px solid rgba(0, 0, 0, 0.1);
  top: -250px;
  right: -250px;
  box-sizing: border-box;
}

.card_ring::after {
  content: "";
  position: absolute;
  height: 500px;
  width: 500px;
  border-radius: 100vw;
  background: transparent;
  border: 50px solid rgba(0, 0, 0, 0.1);
  bottom: -415px;
  right: -155px;
  box-sizing: border-box;
}

.cartContainer {
  width: 100%;
  flex: 1;
  min-width: 320px;
  padding: 0px 10px;
  margin-top: 10px;
}

.cartItems {
  width: 100%;
  min-height: 280px;
  max-height: 320px;
  margin-top: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
}

.cartItems::-webkit-scrollbar {
  display: none;
}

.cartItem {
  display: flex;
  align-items: center;
  margin: 8px 0;
}

.cartItem .imgBox {
  width: 60px;
  min-width: 60px;
  height: 60px;
  min-height: 60px;
  background: #00ffc855;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}

.cartItem .imgBox img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.cartItem .itemSection {
  margin-left: 10px;
}

.cartItem .itemSection .itemName {
  font-size: 16px;
  color: #2a2b3c;
}

.cartItem .itemSection .itemQuantity {
  font-size: 16px;
  color: #2a2b3c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
}

.cartItem .itemSection .itemQuantity span {
  color: ${theme.colors.heading_color};
}

.cartItem .itemSection .itemQuantity .quantity {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 60px;
}

.cartItem .itemSection .itemQuantity .quantity .itemRemove {
  color: #2a2b3c;
  font-size: 24px;
}

.cartItem .itemSection .itemQuantity .quantity .itemAdd {
  color: #2a2b3c;
  font-size: 24px;
}

.cartItem .itemPrice {
  font-size: 16px;
  font-weight: 600;
  color: #2a2b3c;
  margin-left: auto;
}

.cartItem .itemPrice .dolorSign {
  font-size: 12px;
  color: ${theme.colors.heading_color};
}

.cartItem .itemPrice .itemPriceValue {
  font-size: 16px;
  color: #373848;
}

.totalSection {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 8px;
  margin-bottom:20px;
}

.totalSection h3 {
  font-size: 18px;
  font-weight: 600;
  color: #2a2b3c;
}

.totalSection p {
  font-size: 18px;
  font-weight: 600;
  color: #2a2b3c;
}

.totalSection p span {
  font-size: 14px;
  color: ${theme.colors.heading_color};
}

.checkOut {
  outline: none;
  border: none;
  width: 100%;
  padding: 10px 20px;
  background: ${theme.colors.heading_color};
  border-radius: 100vw;
  color: #faf9fb;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 2px;
}

.addSomeItem {
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(0%);
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.addSomeItem.unactive {
  transform: translateX(200%);
  display: none;
}

@media screen and (min-width: 650px) {
  .rowContainer {
    justify-content: space-between;
  }

  .inputBox {
    width: 60%;
  }
}

@media screen and (min-width: 950px) {
  main {
    display: flex;  
    width: calc(100vw - 350px);
    height: calc(100vh-65px); 
  }
  .mainContainer {
    padding: 10px 30px;    
  }
  .banner {
    height: 160px;
  }

  .deliveryPic {
    bottom: -13px;
    width: 278px;
  }

  .bannerContent h3 {
    font-size: 24px;
  }

  .bannerContent p {
    font-size: 15px;
    margin: 12px 0;
    width: unset;
  }

  .bannerContent a {
    font-size: 16px;
  }  
  .rightMenu {
    position: fixed;
    z-index: 1;
    transform: translateX(0%);
    top: 60px;
    height: calc(100vh-65px);
    position: fixed;
  }
  .itemCard {
    width: 180px;
    height: 200px;
  }
}


`;
