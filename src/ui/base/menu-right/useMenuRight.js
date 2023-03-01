import React from 'react';
//import {  useSelector } from "react-redux"; //useDispatch,
// import { MenuItems, Items } from "utils/data";
import { useStateValue } from "context/state-provider";
const useRightMenu = () => {
   // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;
  const [{ cart, total }, dispatch] = useStateValue();
  const [totalPrice, setTotalPrice] = React.useState(0);
 React.useEffect(() => {
   if(cart){
     document.querySelector(".addSomeItem").classList.toggle("unactive");
   }
}, [cart, total, totalPrice]); 

return{  
 cart,
 total,
};
}
export default useRightMenu;