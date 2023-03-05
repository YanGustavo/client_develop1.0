import React, {Suspense} from 'react';
import Link from 'next/link';
import * as SMenuRight from './styles';
import { Skeleton} from 'components/Skeleton';
import useMenuRight from "./useMenuRight";
import useMenuRightAnimate from "./useMenuRightAnimate";
import CreditCard from "ui/base/credit-card";
import CartItem from "ui/base/cart-item";
import MenuBottom from "ui/base/menu-bottom";
//import Footer from "ui/base/footer";
import CloseIcon from '@mui/icons-material/Close';


 const MenuRight = () => {
  const {cart, total} = useMenuRight(); 
  useMenuRightAnimate(); 
return (
      <SMenuRight.MenuRightStyle>
         <div className="menuRight">
         <div className="closeMenu">
        <CloseIcon className="toggleIcon"/>
      </div>
          <div className="debitCardContainer">
          <CreditCard name="Yan Gustavo" />
          </div>          
             <div className="addSomeItem">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
                alt=""
                className="emptyCart"
              />
              </div>          
            <div className="cartCheckOutContianer">
              <div className="cartContainer">
                {/* <SubMenuContainer /> */}

                <div className="cartItems">
                <Suspense fallback={<Skeleton/>}>
                    {cart &&
                    cart.map((data:any) => (
                      <CartItem
                        key={data.id}
                        itemId={data.id}
                        name={data.name}
                        imgSrc={data.imgSrc}
                        price={data.price}
                      />
                    ))}   
                    </Suspense>
                </div>
              </div>
              <div className="totalSection">
                <h3>Total</h3>
                <p>
                  <span>$ </span> {total}
                </p>
                <Link href="" className="checkOut">Check Out</Link>
              </div> 
            </div> 
            <section className="footer-component">
              <MenuBottom/>
            </section> 
                     
        </div>  
  </SMenuRight.MenuRightStyle>
);
}
export default MenuRight;