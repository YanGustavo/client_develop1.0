'use client';
import  React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "redux/actions";
import Loading from "components/Loading";
import Message from "components/Error";
import Card from "@/ui/tests/card/card";
import Pagination from "components/pagination";


const ShopSection = () => { 
  //const { keyword, pagenumber } = props;  
  const keyword = "";
  const pagenumber = "";
  const dispatch:any = useDispatch();

  const productList = useSelector((state:any) => state.productList);
  const { loading, error, products, page, pages } = productList;


  useEffect(() => {
    dispatch(listProduct(keyword, pagenumber)); 
  }, [dispatch, keyword, pagenumber]);
  console.log(productList);
  return (
    <> 
    <div className="container mx-auto">
    <div className="flex flex-wrap -mx-4">
      {loading && ( <div className="mb-5"> <Loading /> </div>) }
      {error && ( <Message variant="alert-danger">{error}</Message>) }
   
     {productList && (products.map((product:any) => (<Card product={product} key={product._id}/>)))}
     {pages && (<Pagination pages={pages} page={page} keyword={keyword ? keyword : ""} />
    )} 
    </div>
  </div>
    </>
  );
};
export default ShopSection;