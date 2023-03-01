'use client';
import React from "react";
import * as SItemCard from './styles';
import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import { actionType } from "redux/reducer-temp";
import { useStateValue } from "context/state-provider";
import { Items } from "utils/data";
let cartData = [];


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
  // id={itemId}
  return (
    <SItemCard.ItemCardStyle>       
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
    </SItemCard.ItemCardStyle>
  );
}

export default ItemCard;
