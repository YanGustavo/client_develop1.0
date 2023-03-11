import { useStateValue } from "context/state-provider";
const useIndexAnimate = ({cart, total, totalPrice}) => {
  
 React.useEffect(() => {
   if(cart){
     document.querySelector(".addSomeItem").classList.toggle("unactive");
   }
}, [cart, total, totalPrice]); 
return;
}
export default useIndexAnimate;