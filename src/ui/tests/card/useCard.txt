
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "redux/actions/cart-actions";


const useCounter = (product:any, qty:any) => {
  const dispatch:any = useDispatch();
 const cart = useSelector((state:any) => state.cart);
 const { error, loading, cartItems } = cart;
 console.log("cartItens:"+ cartItems + "ERROS:" + error + "loading:" +loading);

 const AddToCartHandle = (e:any) => {
  e.preventDefault();
  if (product._id) {
    dispatch(addToCart(product._id, qty));
  }
 
};
return{
  error,
  loading,
  cartItems,
  AddToCartHandle
};
  
}
export default useCounter;