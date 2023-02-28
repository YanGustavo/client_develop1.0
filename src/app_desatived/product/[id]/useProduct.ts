'use client'
import React from "react";
//import Link from 'next/link';
//import {useRouter} from 'next/navigation';
import { useDispatch, useSelector } from "react-redux";
import {createProductReview, listProductDetails} from "redux/actions/product-actions";
import { PRODUCT_CREATE_REVIEW_RESET } from "constants/product-constants";
import moment from "moment";



const useProduct = (productId:any) =>{
  // const [qty, rating, comment] = [0, 0, "oi"];
  const dispatch:any = useDispatch();
  // const router:any = useRouter();
  // const  redirect = router.query;
  const productDetails = useSelector((state:any) => state.productDetails);
  const { loading, error, product } = productDetails;
  // const userLogin = useSelector((state:any) => state.userLogin);
  // const { userInfo } = userLogin;
  // const productReviewCreate = useSelector((state:any) => state.productReviewCreate);
  // const {
  //   loading: loadingCreateReview,
  //   error: errorCreateReview,
  //   success: successCreateReview,
  // } = productReviewCreate;

  React.useEffect(() => {
    // if (successCreateReview) {
    //   alert("Review Submitted");
    //   setRating(0);
    //   setComment("");
    //   dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    // }
    dispatch(listProductDetails(productId));
  }, [dispatch, productId]); //, successCreateReview

  const AddToCartHandle = (e:any) => {
    e.preventDefault();
    // router.push(`/cart/${productId}?qty=${qty}`);
    console.log("colocar função de apertar botão aqui")
  };
  const submitHandler = (e:any) => {
    e.preventDefault();
    dispatch(
      // createProductReview(productId, {
      //   rating,
      //   comment,
      // })
    );
  };
 
 

return{
   loading,
   error,
   product,
   AddToCartHandle,
   submitHandler,
};  
}
export default useProduct;