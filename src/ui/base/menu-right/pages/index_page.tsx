import { Suspense } from 'react';
import SkeletonComponent from 'components/SkeletonComponent';
import Link from 'next/link';
import {Container} from 'templates/base/styles';
import * as SMenuRight from '../styles';
import CreditCard from "ui/base/credit-card";
import CartItem from "ui/base/cart-item";
import Button from "components/Button";
import useIndex from "./hooks/useIndex";
import useIndexAnimate from "./hooks/useIndexAnimate";
export default function IndexPage() {
  const {cart, total, totalPrice} = useIndex();
  return (
    <>
              <Container>
                  <CreditCard name="Yan Gustavo" />
              </Container> 
              <Container>
                <SMenuRight.AddSomeItem>
                  <img
                  src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
                  alt=""
                  />
                </SMenuRight.AddSomeItem> 
              </Container>
              <Container>
                <SMenuRight.AddSomeItem>
                  <img
                  src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
                  alt=""
                />
              </SMenuRight.AddSomeItem> 
              </Container>

              
              <Container>
                <h3>Total</h3>
                <p>
                  <span>$ </span>10,00 {totalPrice}
                </p>
                </Container>
                {/* prettier-ignore */}
                <Container>
                    <Button color='custom' variant='secondary' size='large'><Link href="">Check Out</Link></Button>
                </Container>
     <Container>
    <div className="cartItems">
    <Suspense fallback={<SkeletonComponent/>}>
        {cart &&
        cart.map((data) => (
          <CartItem
            key={data.id}
            itemId={data.id}
            name={data.name}
            imgSrc={data.imgSrc}
            price={data.price}
          />
        ))}  
         <CartItem
            key={1}
            itemId={1}
            name="iPhone 8"
            imgSrc="/img/1.png"
            price="2.200,00"
          /> 
        </Suspense>
    </div>
  </Container>
  </>
  );
}