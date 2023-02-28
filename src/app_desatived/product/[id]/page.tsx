'use client';
import React from 'react';
//import Loading from "components/Loading";
//import Message from "components/Error";
 import {Base} from 'templates/base';
import Announcement from "components/Announcement";
//import Breadcrumbs from "components/Breadcrumbs";
import SingleProduct from "@/ui/tests/single-product";
import useProduct from "./useProduct";
//import { SkeletonCard } from 'components/SkeletonCard';

//import Rating from "components/rating";
export type PageProps = {
  params?: any;
  children?: React.ReactNode;
};
export default function SingleProductPage({ params }: PageProps) {
  const productId = params.id;
  if (!productId) return null;
  //const productId = "63d6ae4fabe21a29359d3a4d";
  // const [rating, setRating] = React.useState(0);
  // const [comment, setComment] = React.useState("");
  const {loading, error, product, AddToCartHandle } = useProduct(productId); //, qty, rating, comment
  return (    
  <>
  <Announcement/>
  <Base>     
  <div className="antialiased">
          <div className="py-6">
          {/* {Array.from({ length: 9 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))} */}
            {/* Breadcrumbs */}
             {/* <Breadcrumbs/> */}
            {/* Single Product */}
            {/*loading && (<Loading/>) */}
    {/*error && (<Message>{error}</Message>)*/ }
    {/* {product && (<Breadcrumbs product={product}/>)}     */}
    {product && (<SingleProduct product={product} AddToCartHandle={AddToCartHandle}/>)}
          </div>
      </div> 
    </Base> 
  </>
  )
}
