import axios from "axios";
import {
  CART_DETAILS_REQUEST,
  CART_ADD_SUCCESS,
  CART_DETAILS_FAIL,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from "constants/cart-constants";

// ADD TO CART
export const addToCart = (id:number, qty:number) => async (dispatch:any, getState:any) => {
  try{
    dispatch({ type: CART_DETAILS_REQUEST });
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/api/products/${id}`);
    console.log(data);
    dispatch({
      type: CART_ADD_SUCCESS,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  }catch (error:any){
    dispatch({
      type: CART_DETAILS_FAIL,
      payload: 
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
     }); 
  }
  
};

// REMOVE PRODUCT FROM CART
export const removefromcart = (id:number) => (dispatch:any, getState:any) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// SAVE SHIPPING ADDRESS
export const saveShippingAddress = (data:any) => (dispatch:any) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

// SAVE PAYMENT METHOD
export const savePaymentMethod = (data:any) => (dispatch:any) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });

  localStorage.setItem("paymentMethod", JSON.stringify(data));
};
