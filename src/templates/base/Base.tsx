import React, {Suspense} from 'react';
import Link from 'next/link';
import useBase from "./useBase";
import { Skeleton} from 'components/Skeleton';
//import Link from 'next/link';
import * as SBase from './styles';
import Header from "ui/base/header";
import Footer from "ui/base/footer";
import CreditCard from "ui/base/credit-card";
import CartItem from "ui/base/cart-item";
import MenuBottom from "ui/base/menu-bottom";




const Base = ({
  children,
}: {
  children: React.ReactNode
}) => { 
  const {  cart, total} = useBase(); 
  // const [totalPrice, setTotalPrice] = React.useState(0);
  // const {useInfo} = useHomeTemplate(totalPrice);  
  return (
    <SBase.BaseStyle>
    <div className="HomeTemplate">
    {/* Header section */}
    <Suspense fallback={<Skeleton/>}>
      <Header/> 
      <div className="lineGradientTop"></div>
    </Suspense>
<MenuBottom/>
    
    <div className="rightMenu">
          <div className="debitCardContainer">
          <CreditCard name="Yan Lidão" />
            {/* <div className="debitCard">
            <DebitCard /> 
            </div> */}
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
              </div>
              <Link href="" className="checkOut">Check Out</Link>
            </div>          
        </div>   
    <main>
    <Suspense fallback={<Skeleton/>}> 
      {children}  
    </Suspense>
    </main>    
    <Footer/> 
  </div> 
  </SBase.BaseStyle>
  );
}  
export default Base;
