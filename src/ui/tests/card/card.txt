'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Rating from "components/rating";
import {
  ShoppingCartRounded,
} from "@mui/icons-material";
import Message from "components/Error";
import Button from "components/Button";

import Loading from "components/Loading";
import useCard from "./useCard";

const Card = (productProps:any) => {
  const product = productProps.product;
  const [qty, setQty] = React.useState(1);
  const { error, loading, AddToCartHandle} = useCard(product, qty);

  return( 
        <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
    <Link href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
    <div className="relative pb-48 overflow-hidden">
      <Image className="absolute inset-0 h-full w-full object-cover" src={`/${product.image}`} width={100} height={100} alt={product.name} />
    </div>
    <div className="p-4">
      <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Highlight</span>
      <h2 className="mt-2 mb-2  font-bold">
        <Link href={`/single_product/${product._id}`}>
             {product.name}
         </Link></h2>
      <p className="text-xs">Marca: {product.brand}<Rating rating={product.rating}/>{product.rating} Estrelas</p>
      <div className="mt-3 flex items-center">
        <span className="text-sm font-semibold"></span>&nbsp;<span className="font-bold text-xl">R$: {product.price}</span>&nbsp;<span className="text-sm font-semibold"></span>
      </div>
    </div>
    <div className="p-4 border-t border-b text-xs text-gray-700">
      <span className="flex items-center mb-1">
        <i className="far fa-clock fa-fw mr-2 text-gray-900"></i>{product.reviews.length} Avaliações
      </span>
      <span className="flex items-center">
        <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i> {product.description}
      </span>        
    </div>
    <div className="p-4 flex items-center text-sm text-gray-600">
          
      {product.countInStock > 0 ? (
                    <>
                          <select
                            value={qty}
                            onChange={(e:any) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x:number) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </select>
                        
                        {loading ? (
                          <Loading />
                          ): error ? (<i>{error}</i>
                          // <Message variant="alert-danger">{error}</Message>
                          ):(<><Button onClick={AddToCartHandle} className="round-black-btn">+ <ShoppingCartRounded/></Button></>)
                        }                        
                        </>
                    ) : null}
      
      </div> 
  </Link>
  </div>            
  );

}
export default Card;