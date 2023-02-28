'use client';
import React from "react";
import styled from 'styled-components';
import theme from '@/styles/styled-components/theme';
import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import { actionType } from "redux/reducer-temp";
import { useStateValue } from "context/state-provider";
import { Items } from "utils/data";
let cartData = [];
const ItemCardStyle = styled.div`
  width: 160px;
  height: 180px;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 10px 0;


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


`;

//  type ItemCardProps = {
//   itemId: Number, 
//   imgSrc: any,  
//    name: String,   
//    price: any,
//    ratings: any,
//  }

function ItemCard( {itemId, imgSrc, name, price, ratings} ) { //:ItemCardProps
  const [currentValue, setCurrentValue] = React.useState(Math.floor(ratings));
  const [isFavourite, setFavourite] = React.useState(false);
  const [{}, dispatch] = useStateValue();
  const [isCart, setCart] = React.useState(null);

  React.useEffect(() => {
    if (isCart) {
      cartData.push(isCart);
      dispatch({
        type: actionType.SET_CART,
        cart: cartData,
      });         
    }
  }, [isCart]);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  return (
    <ItemCardStyle id={itemId}>
      <div
        className={`isFavourite ${isFavourite ? "active" : ""}`}
        onClick={() => setFavourite(!isFavourite)}
      >
        <Favorite />
      </div>

      <div className="imgBox">
        <img src={imgSrc} alt="" className="itemImg" />
      </div>

      <div className="itemContent">
        <h3 className="itemName">{name}</h3>
        <div className="bottom">
           <div className="ratings">
            {Array.apply(null, { length: 5 }).map((e, i) => (
              <i
                key={i}
                className={`rating ${currentValue > i ? "orange" : "gray"}`}
                onClick={() => handleClick(i + 1)}
              >
                <StarRounded />
              </i>
            ))}
            <h3 className="price">
              <span>$ </span>
              {price}
            </h3>
          </div> 
           <i
            className="addToCart"
            onClick={() => {
              setCart(Items.find((n) => n.id === itemId));
            }}
          >
            <AddRounded />
          </i>
        </div>
      </div>
    </ItemCardStyle>
  );
}

export default ItemCard;
